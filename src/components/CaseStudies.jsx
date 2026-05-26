const CASES = [
  {
    name: 'Sylvia Gacheru',
    role: 'Strategy & AI Systems',
    result: '22 qualified calls in 70 days. 1 high-ticket client closed.',
    quote: 'Was entirely dependent on referrals. Not anymore.',
    highlight: '22 calls',
  },
  {
    name: 'Antonny Mwaura',
    role: 'Technical Professional',
    result: '31.8% response rate. 4,079% jump in impressions. In 19 days.',
    quote: 'From invisible to inbound.',
    highlight: '31.8%',
  },
  {
    name: 'Grace Kimani',
    role: 'NGO Sector',
    result: '3 clients closed in 90 days. In a niche most people write off.',
    quote: 'Her profile did the qualifying for her.',
    highlight: '3 clients',
  },
  {
    name: 'Marc Voi',
    role: 'HR Consulting',
    result: '30% response rate from board-level contacts. In 30 days.',
    quote: 'Broad positioning made sharp.',
    highlight: '30%',
  },
  {
    name: 'Maggie Maara',
    role: 'Senior Professional',
    result: 'Profile views: 30 → 109. First inquiry arrived within 60 days.',
    quote: 'Strong background. Finally visible.',
    highlight: '30→109',
  },
  {
    name: 'Richard',
    role: 'Service Professional',
    result: 'Full profile rebuild. Repositioned around outcomes, not roles.',
    quote: 'Credibility problem solved.',
    highlight: 'Full rebuild',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-12">
          Real professionals. <span className="text-accent-plum">Real results.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-xl p-6 border-l-2 border-l-accent-plum transition-all duration-300"
            >
              <p className="font-mono text-xs text-accent-amber mb-3">{c.highlight}</p>
              <p className="text-text-primary text-sm leading-relaxed mb-4">
                {c.result}
              </p>
              <p className="text-text-secondary text-sm italic mb-4">
                "{c.quote}"
              </p>
              <div>
                <p className="font-syne font-bold text-sm text-text-primary">{c.name}</p>
                <p className="text-text-secondary text-xs">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
