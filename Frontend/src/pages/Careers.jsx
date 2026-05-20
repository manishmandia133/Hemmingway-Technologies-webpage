import { useScrollReveal } from '../hooks/useAnimations';

export default function Careers() {
  useScrollReveal();

  return (
    <div className="page-wrapper pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center fade-up mb-16">
          <h1 className="text-5xl font-bold mb-6 font-heading">Careers</h1>
          <p className="text-xl text-muted">
            Join the team building the future of technology at Hemmingway.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center fade-up">
          <div className="text-4xl mb-6">👋</div>
          <h2 className="text-2xl font-bold mb-4 font-heading">We're always looking for talent</h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            While we don't have any open positions listed at the moment, we're always interested in meeting passionate engineers, designers, and innovators.
          </p>
          <a href="/contact" className="nav-btn primary inline-flex">Send us your Resume</a>
        </div>
      </div>
    </div>
  );
}
