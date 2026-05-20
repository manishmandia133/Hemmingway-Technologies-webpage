import { useScrollReveal } from '../hooks/useAnimations';

export default function PressKit() {
  useScrollReveal();

  return (
    <div className="page-wrapper pt-32 pb-24">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center fade-up mb-16">
          <h1 className="text-5xl font-bold mb-6 font-heading">Press Kit</h1>
          <p className="text-xl text-muted">
            Assets, branding guidelines, and company information for media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 fade-up">
            <h3 className="text-xl font-bold mb-4 font-heading">Logos</h3>
            <p className="text-muted mb-6">High-resolution PNG and SVG versions of our primary logo and icon.</p>
            <button className="nav-btn ghost w-full justify-center">Download Logos.zip</button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 fade-up" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 font-heading">Brand Guidelines</h3>
            <p className="text-muted mb-6">Our color palette, typography, and usage rules.</p>
            <button className="nav-btn ghost w-full justify-center">View Guidelines PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
