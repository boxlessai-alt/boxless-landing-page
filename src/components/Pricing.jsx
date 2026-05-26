import { useCountdown } from '../hooks/useCountdown';

const INCLUDES = [
  'LinkedIn SEO Overhaul',
  'Headline + About Section Rewrite',
  'Banner Design (2 options)',
  '2 Logo Variations',
  'Brand Kit + Brand Guidelines',
  'LinkedIn Profile Audit Report (Bonus)',
  '3 Business Day Delivery',
  '100% Done For You',
];

export default function Pricing() {
  const { days, hours, minutes } = useCountdown();

  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="glass rounded-2xl p-8 sm:p-10 border border-accent-gold/20 glow-gold">
          <p className="text-text-secondary text-sm text-center mb-2">
            What professionals normally pay:
          </p>
          <p className="text-text-secondary text-2xl text-center line-through opacity-50 mb-6">
            $850
          </p>

          <p className="text-text-secondary text-sm text-center mb-2">Today's offer:</p>
          <p className="font-mono font-bold text-6xl sm:text-7xl text-accent-gold text-glow-gold text-center mb-8">
            $197
          </p>

          <ul className="space-y-3 mb-8">
            {INCLUDES.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-accent-cyan mt-0.5">✅</span>
                <span className="text-text-primary">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-text-secondary text-sm text-center mb-6">
            This price is only available for 30 clients.
            <br />
            <span className="text-accent-gold font-semibold">26 spots remaining</span>
            {' · '}
            <span className="font-mono text-accent-cyan">
              {days}d {hours}h {minutes}m
            </span>
          </p>

          <button
            onClick={scrollToForm}
            className="w-full bg-accent-gold text-bg-primary font-bold text-lg py-4 rounded-xl hover:brightness-110 transition-all"
          >
            Apply Now — Secure Your $197 Spot →
          </button>
        </div>
      </div>
    </section>
  );
}
