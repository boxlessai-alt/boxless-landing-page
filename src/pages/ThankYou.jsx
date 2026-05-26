import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useParticles } from '../hooks/useParticles';

export default function ThankYou() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);
  const location = useLocation();
  const whatsapp = location.state?.whatsapp || '';

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <img
          src="/logo.png"
          alt="Boxless AI"
          className="h-10 w-auto mx-auto mb-10"
        />

        <h1 className="font-syne font-bold text-3xl sm:text-4xl text-text-primary mb-6">
          Application received.
        </h1>

        <div className="glass rounded-2xl p-8 sm:p-10 text-left">
          <p className="text-text-primary text-base leading-relaxed mb-4">
            Thank you for applying.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            We will review your application and if this is a good fit, we will be in touch within 30 minutes.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            Keep your eyes on your WhatsApp and email.
          </p>

          {whatsapp && (
            <p className="text-text-secondary text-sm border-t border-white/10 pt-4">
              We have your number:{' '}
              <span className="text-accent-amber font-mono">{whatsapp}</span>
            </p>
          )}
        </div>

        <div className="mt-8 text-text-secondary/60 text-sm">
          <p className="font-medium text-text-secondary">Sylvia G.</p>
          <p>Co-Founder, Boxless AI Ltd, Nairobi</p>
        </div>
      </div>
    </div>
  );
}
