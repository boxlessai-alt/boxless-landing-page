export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <img
          src="/logo.png"
          alt="Boxless AI Ltd"
          className="h-8 w-auto mx-auto mb-4"
        />
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
