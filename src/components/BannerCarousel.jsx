import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  { src: '/banners/banner-2.jpg', name: 'Antonny Gacheru' },
  { src: '/banners/banner-3.jpg', name: 'Marc Voi Chiuli' },
  { src: '/banners/banner-4.jpg', name: 'Richard Kibaara' },
  { src: '/banners/banner-5.jpg', name: 'Judy Muiruri' },
  { src: '/banners/banner-6.jpg', name: 'Mercy Nyambura' },
  { src: '/banners/banner-7.png', name: 'Stanley' },
  { src: '/banners/banner-8.png', name: 'Marc' },
  { src: '/banners/banner-9.png', name: 'Maggie' },
  { src: '/banners/banner-1.jpg', name: 'Agoyom Akomjo' },
];

export default function BannerCarousel() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const scrollTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, BANNERS.length - 1));
    setCurrent(clamped);
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      trackRef.current.scrollTo({
        left: clamped * slideWidth,
        behavior: 'smooth',
      });
    }
  }, []);

  const prev = () => scrollTo(current - 1);
  const next = () => scrollTo(current + 1);

  // Auto-advance every 4s, pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      if (isHovered) return;
      setCurrent((prevIdx) => {
        const nextIdx = prevIdx >= BANNERS.length - 1 ? 0 : prevIdx + 1;
        if (trackRef.current) {
          const slideWidth = trackRef.current.offsetWidth;
          trackRef.current.scrollTo({
            left: nextIdx * slideWidth,
            behavior: 'smooth',
          });
        }
        return nextIdx;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Sync current index on scroll (for touch/drag)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const slideWidth = track.offsetWidth;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setCurrent(idx);
    };
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-4">
          Built to position you as the{' '}
          <span className="text-accent-plum text-glow-plum">authority</span> in your space.
        </h2>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-text-primary hover:border-accent-plum/50 hover:text-accent-plum transition-all disabled:opacity-30 disabled:cursor-not-allowed -ml-2 sm:-ml-5"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current >= BANNERS.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-text-primary hover:border-accent-plum/50 hover:text-accent-plum transition-all disabled:opacity-30 disabled:cursor-not-allowed -mr-2 sm:-mr-5"
          >
            <ChevronRight size={20} />
          </button>

          {/* Track — single banner, full width, swipeable */}
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth mx-8 sm:mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {BANNERS.map((banner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full snap-start"
              >
                <div className="glass rounded-xl overflow-hidden">
                  <div
                    className="bg-bg-secondary flex items-center justify-center"
                    style={{ aspectRatio: '4 / 1' }}
                  >
                    <img
                      src={banner.src}
                      alt={`LinkedIn banner for ${banner.name}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                  <p className="text-sm text-text-secondary px-4 py-3 text-center">
                    {banner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots — 9 total */}
          <div className="flex justify-center gap-2 mt-6">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'bg-accent-amber w-6'
                    : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
