import { useRef } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { useParticles } from '../hooks/useParticles';

export default function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);
  const { days, hours, minutes, seconds } = useCountdown();

  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Announcement bar */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm">
          <span className="text-accent-amber">⚡</span>
          <span className="text-text-secondary">Limited offer — 30 spots only. Closes in</span>
          <span className="font-mono font-bold text-accent-amber">
            {days}d {hours}h {minutes}m {seconds}s
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6">
          Your LinkedIn Profile Should Be{' '}
          <span className="text-accent-amber text-glow-amber">Bringing You Clients.</span>
          <br />
          Is Yours?
        </h1>

        {/* Subheadline */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Most consultants, coaches, and founders are invisible on LinkedIn —
          not because they lack credibility, but because their profile reads
          like a résumé instead of a business asset.
          <br /><br />
          We fix that. Completely. In 3 business days.
        </p>

        {/* Social proof bar */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary mb-10">
          <span className="flex items-center gap-1">
            <span className="text-accent-amber">✓</span> 20x average jump in profile views
          </span>
          <span className="flex items-center gap-1">
            <span className="text-accent-amber">✓</span> 3 clients closed in 90 days
          </span>
          <span className="flex items-center gap-1">
            <span className="text-accent-amber">✓</span> 31.8% response rate in 19 days
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-accent-amber text-bg-primary font-bold text-lg px-8 py-4 rounded-xl glow-amber hover:brightness-110 transition-all mb-6"
        >
          Secure Your Spot — $197
        </button>

        {/* Spots remaining */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-text-secondary">26 of 30 spots remaining</span>
        </div>
      </div>
    </section>
  );
}
