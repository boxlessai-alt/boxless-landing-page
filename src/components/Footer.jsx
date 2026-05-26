export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-baseline justify-center gap-1 mb-4">
          <span className="font-syne font-bold text-lg text-accent-plum">BOXLESS</span>
          <span className="font-syne font-bold text-lg text-accent-purple">AI</span>
          <span className="font-dm text-xs text-text-secondary ml-1">Ltd</span>
        </div>
        <p className="text-text-secondary text-sm mb-2">Nairobi, Kenya</p>
        <p className="text-text-secondary/60 text-xs">
          © 2026 Boxless AI Ltd. All rights reserved.
        </p>
        <p className="text-text-secondary/40 text-xs mt-3">
          Prices in USD. Delivery in 3 business days from onboarding form submission.
        </p>
      </div>
    </footer>
  );
}
