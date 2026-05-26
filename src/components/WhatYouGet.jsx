import { Search, PenLine, Image, Layers, Palette, FileText, Clock } from 'lucide-react';

const ICON_PROPS = { size: 28, color: '#F59E0B', strokeWidth: 1.5 };

const FEATURES = [
  {
    Icon: Search,
    title: 'LinkedIn SEO Overhaul',
    desc: 'Optimized so the right people find you first.',
  },
  {
    Icon: PenLine,
    title: 'Headline + About Section Rewrite',
    desc: 'Written to convert profile views into DMs.',
  },
  {
    Icon: Image,
    title: 'Banner Design',
    desc: 'Designed by Joseph Kaloi, Boxless AI Creative Director.',
  },
  {
    Icon: Layers,
    title: '2 Logo Variations',
    desc: 'Professional mark you can use across all your platforms.',
  },
  {
    Icon: Palette,
    title: 'Brand Kit + Brand Guidelines',
    desc: 'Colors, fonts, and rules — so everything looks consistent.',
  },
  {
    Icon: FileText,
    title: 'LinkedIn Profile Audit Report (BONUS)',
    desc: '13-page deep-dive on exactly what to fix and why.',
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-4">
          Everything you need to go from{' '}
          <span className="text-accent-plum">invisible</span> to{' '}
          <span className="text-accent-purple">undeniable</span>.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-xl p-6 transition-all duration-300"
            >
              <div className="mb-4">
                <f.Icon {...ICON_PROPS} />
              </div>
              <h3 className="font-syne font-semibold text-lg text-text-primary mb-2">
                {f.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-text-secondary">
            <Clock size={16} color="#F59E0B" strokeWidth={1.5} />
            Delivered in 3 business days. 100% done for you.
          </div>
        </div>
      </div>
    </section>
  );
}
