import { useScrollReveal } from '../hooks/useAnimations';

export default function Solutions() {
  useScrollReveal();

  const solutions = [
    { id: 'launchpad', emoji: '🚀', title: 'Launchpad', desc: 'From idea to production-ready MVP in 6 weeks. Perfect for startups and rapid prototyping.' },
    { id: 'ai-suite', emoji: '🧠', title: 'AI Suite', desc: 'Custom LLM integrations & intelligent automation designed for enterprise workflows.' },
    { id: 'cloudops', emoji: '☁️', title: 'CloudOps', desc: 'Managed cloud infrastructure at enterprise scale. 24/7 monitoring and optimization.' },
    { id: 'securestack', emoji: '🔐', title: 'SecureStack', desc: 'Full-stack security audit & hardening service to protect your most critical assets.' },
  ];

  return (
    <div className="page-wrapper pt-32 pb-24">
      <div className="container">
        <div className="text-center fade-up mb-16">
          <h1 className="text-5xl font-bold mb-6 font-heading">Pre-Packaged Solutions</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Accelerate your time to market with our proven, ready-to-deploy technology suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((sol) => (
            <div key={sol.id} id={sol.id} className="solution-card p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 fade-up hover:border-primary/50 transition-all group" style={{ scrollMarginTop: '120px' }}>
              <div className="text-4xl mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{sol.emoji}</div>
              <h3 className="text-2xl font-bold mb-4 font-heading">{sol.title}</h3>
              <p className="text-muted leading-relaxed text-lg">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
