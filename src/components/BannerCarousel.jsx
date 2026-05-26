import { useRef, useState, useEffect } from 'react';

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

export default function BannerCarousel() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-4">
          Built to position you as the{' '}
          <span className="text-accent-cyan text-glow-cyan">authority</span> in your space.
        </h2>

        {/* Carousel */}
        <div className="relative mt-12">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {BANNERS.map((banner, i) => (
              <div
                key={i}
                className={`flex-shrink-0 snap-center glass rounded-xl overflow-hidden transition-all duration-500 ${
                  i === current ? 'ring-2 ring-accent-cyan' : 'opacity-70'
                }`}
                style={{ width: 'min(85vw, 400px)' }}
              >
                <div className="aspect-[1584/396] bg-bg-secondary relative">
                  <img
                    src={banner.src}
                    alt={`LinkedIn banner for ${banner.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p className="text-sm text-text-secondary px-4 py-3">{banner.name}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-accent-cyan w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
