export default function Navbar() {
  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Boxless AI"
            className="h-8 w-auto"
          />
        </a>
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
