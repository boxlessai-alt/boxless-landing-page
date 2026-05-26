import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  { src: '/banners/banner-1.jpg', name: 'Agoyom Akomjo' },
  { src: '/banners/banner-2.jpg', name: 'Antonny Gacheru' },
  { src: '/banners/banner-3.jpg', name: 'Marc Voi Chiuli' },
  { src: '/banners/banner-4.jpg', name: 'Richard Kibaara' },
  { src: '/banners/banner-5.jpg', name: 'Judy Muiruri' },
  { src: '/banners/banner-6.jpg', name: 'Mercy Nyambura' },
  { src: '/banners/banner-7.png', name: 'Stanley' },
  { src: '/banners/banner-8.png', name: 'Marc' },
  { src: '/banners/banner-9.png', name: 'Maggie' },
];

const VISIBLE_COUNT = 3;

export default function BannerCarousel() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const maxIndex = BANNERS.length - VISIBLE_COUNT;

  const scrollTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / BANNERS.length;
      trackRef.current.scrollTo({
        left: cardWidth * clamped,
        behavior: 'smooth',
      });
    }
  }, [maxIndex]);

  const prev = () => scrollTo(current - 1);
  const next = () => scrollTo(current + 1);

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevIdx) => {
        const nextIdx = prevIdx >= maxIndex ? 0 : prevIdx + 1;
        if (trackRef.current) {
          const cardWidth = trackRef.current.scrollWidth / BANNERS.length;
          trackRef.current.scrollTo({ left: cardWidth * nextIdx, behavior: 'smooth' });
        }
        return nextIdx;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-4">
          Built to position you as the{' '}
          <span className="text-accent-cyan text-glow-cyan">authority</span> in your space.
        </h2>

        <div className="relative mt-12">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan transition-all disabled:opacity-30 disabled:cursor-not-allowed -ml-2 sm:-ml-5"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan transition-all disabled:opacity-30 disabled:cursor-not-allowed -mr-2 sm:-mr-5"
          >
            <ChevronRight size={20} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth mx-8 sm:mx-12"
          >
            {BANNERS.map((banner, i) => (
              <div
                key={i}
                className="flex-shrink-0 glass rounded-xl overflow-hidden transition-all duration-500"
                style={{ width: `calc((100% - ${(VISIBLE_COUNT - 1) * 16}px) / ${VISIBLE_COUNT})` }}
              >
                <div className="aspect-[1584/396] bg-bg-secondary relative">
                  <img
                    src={banner.src}
                    alt={`LinkedIn banner for ${banner.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-text-secondary px-4 py-3">{banner.name}</p>
              </div>
            ))}
          </div>

          {/* Dots — 9 total, one per banner */}
          <div className="flex justify-center gap-2 mt-6">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(Math.min(i, maxIndex))}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'bg-accent-cyan w-6' : 'bg-white/20 w-2 hover:bg-white/40'
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
