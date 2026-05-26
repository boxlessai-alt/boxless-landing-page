export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4">
          Stop leaving money on the table.
          <br />
          Your profile should be{' '}
          <span className="text-accent-cyan text-glow-cyan">working for you</span> 24/7.
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          30 spots. $197. 3 business days.
          <br />
          After this, the price goes back to $850.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-accent-gold text-bg-primary font-bold text-lg px-8 py-4 rounded-xl glow-gold hover:brightness-110 transition-all"
        >
          Apply Now →
        </button>
      </div>
    </section>
  );
}
