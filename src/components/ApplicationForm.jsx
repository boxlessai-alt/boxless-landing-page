import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLead } from '../utils/api';

const BUSINESS_TYPES = [
  'Consultant or Coach',
  'Agency or Service Provider',
  'Founder / Startup',
  'Corporate Professional',
  'NGO or Social Enterprise',
  'Other',
];

const LINKEDIN_GOALS = [
  'Attract clients and grow my business',
  'Build my personal brand and authority',
  'Grow my network and visibility',
  'Find new business partnerships',
  'Find a job or career opportunity',
];

const DEAL_VALUES = [
  'Under $500',
  '$500 – $999',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000+',
];

export default function ApplicationForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    whatsapp: '',
    business_type: '',
    linkedin_goal: '',
    deal_value: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!form.full_name.trim()) return setError('Please enter your full name.');
    if (!form.email.trim() || !form.email.includes('@')) return setError('Please enter a valid email.');
    if (!form.whatsapp.trim()) return setError('Please enter your WhatsApp number.');
    if (!form.business_type) return setError('Please select your business type.');
    if (!form.linkedin_goal) return setError('Please select your LinkedIn goal.');
    if (!form.deal_value) return setError('Please select your deal value.');

    setSubmitting(true);
    setError('');

    try {
      await submitLead(form);
      // Meta Pixel lead event
      if (window.fbq) window.fbq('track', 'Lead');
      // Redirect to thank-you page with WhatsApp number
      navigate('/thank-you', { state: { whatsapp: form.whatsapp } });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <section id="apply" className="py-20 sm:py-28 bg-bg-secondary/50">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary text-center mb-2">
          Apply for your spot.
        </h2>
        <p className="text-text-secondary text-center mb-10">
          Only <span className="text-accent-amber font-semibold">26</span> remaining at $197.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">Full Name *</label>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) => handleChange('full_name', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-white/20 focus:outline-none focus:border-accent-plum/50 transition-colors"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">Email Address *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-white/20 focus:outline-none focus:border-accent-plum/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">WhatsApp Number *</label>
            <input
              type="text"
              value={form.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-white/20 focus:outline-none focus:border-accent-plum/50 transition-colors"
              placeholder="+254712345678"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">What best describes your business? *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BUSINESS_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange('business_type', type)}
                  className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                    form.business_type === type
                      ? 'border-accent-plum bg-accent-plum/10 text-accent-plum'
                      : 'border-white/10 bg-white/5 text-text-secondary hover:border-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* LinkedIn Goal */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">What is the primary goal of your LinkedIn profile? *</label>
            <div className="space-y-2">
              {LINKEDIN_GOALS.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => handleChange('linkedin_goal', goal)}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                    form.linkedin_goal === goal
                      ? 'border-accent-plum bg-accent-plum/10 text-accent-plum'
                      : 'border-white/10 bg-white/5 text-text-secondary hover:border-white/20'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Deal Value */}
          <div>
            <label className="block text-sm text-text-secondary mb-1.5">What is the typical value of one client engagement? *</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DEAL_VALUES.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleChange('deal_value', val)}
                  className={`text-center px-3 py-3 rounded-lg border text-sm transition-all ${
                    form.deal_value === val
                      ? 'border-accent-plum bg-accent-plum/10 text-accent-plum'
                      : 'border-white/10 bg-white/5 text-text-secondary hover:border-white/20'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent-amber text-bg-primary font-bold text-lg py-4 rounded-xl glow-amber hover:brightness-110 transition-all disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Secure My Spot — $197 →'}
          </button>

          <p className="text-text-secondary/60 text-xs text-center">
            We review every application. You'll receive the payment link on WhatsApp within 2 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
