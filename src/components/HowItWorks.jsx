const STEPS = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Fill in the short form below. Takes 2 minutes.',
  },
  {
    num: '02',
    title: 'We Build',
    desc: 'Our team rewrites your profile, designs your visuals, and prepares your full brand kit.',
  },
  {
    num: '03',
    title: 'You Receive',
    desc: 'Everything lands in your inbox in 3 business days. You review, approve, and publish.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-12">
          Three steps. <span className="text-accent-cyan">Three business days.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass border border-accent-cyan/20 mb-4">
                <span className="font-mono font-bold text-2xl text-accent-cyan">{s.num}</span>
              </div>
              <h3 className="font-syne font-bold text-xl text-text-primary mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
