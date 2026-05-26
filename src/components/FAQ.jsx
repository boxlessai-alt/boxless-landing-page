import { useState } from 'react';

const FAQS = [
  {
    q: 'Is this really done for me?',
    a: 'Yes. You fill in the form, we handle everything. You don\'t write a single word.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Just your current LinkedIn profile URL and answers to a short onboarding form after payment. That\'s it.',
  },
  {
    q: 'What if I don\'t have a logo yet?',
    a: 'You get 2 logo options as part of the package. This is a full brand starting point.',
  },
  {
    q: 'Why $197?',
    a: 'This is a launch offer for 30 clients only. Once spots are filled, the price returns to $850.',
  },
  {
    q: 'How will I receive the deliverables?',
    a: 'Via email and WhatsApp, in a Google Drive folder with all your files organized and ready to use.',
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-syne font-semibold text-sm text-text-primary">{item.q}</span>
        <span className={`text-accent-plum text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-10">
          Common questions.
        </h2>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
