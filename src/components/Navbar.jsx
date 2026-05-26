export default function Navbar() {
  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="font-syne font-bold text-lg text-accent-cyan">BOXLESS</span>
          <span className="font-syne font-bold text-lg text-accent-purple">AI</span>
          <span className="font-dm text-xs text-text-secondary ml-1">Ltd</span>
        </div>
        <button
          onClick={scrollToForm}
          className="text-sm font-semibold bg-accent-gold text-bg-primary px-4 py-2 rounded-lg hover:brightness-110 transition-all"
        >
          Secure Your Spot →
        </button>
      </div>
    </nav>
  );
}
