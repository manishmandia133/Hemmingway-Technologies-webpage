import { useScrollReveal } from '../hooks/useAnimations';

export default function Services() {
  useScrollReveal();

  const services = [
    { id: 'custom-software', title: 'Custom Software', desc: 'Bespoke software solutions tailored to your unique business needs.' },
    { id: 'ai-ml', title: 'AI & Machine Learning', desc: 'Intelligent systems and predictive analytics to power your operations.' },
    { id: 'cloud-architecture', title: 'Cloud Architecture', desc: 'Scalable, resilient cloud infrastructure design and deployment.' },
    { id: 'cybersecurity', title: 'Cybersecurity', desc: 'Comprehensive security audits, hardening, and continuous monitoring.' },
    { id: 'mobile-web', title: 'Mobile & Web Apps', desc: 'Cross-platform mobile applications and responsive web platforms.' },
    { id: 'api-integration', title: 'API Integration', desc: 'Seamlessly connect your disparate systems with robust APIs.' },
    { id: 'data-analytics', title: 'Data Analytics', desc: 'Transform raw data into actionable business intelligence.' },
    { id: 'devops-cloud', title: 'DevOps & Cloud', desc: 'Streamline your deployment pipelines and cloud management.' },
  ];

  return (
    <div className="page-wrapper pt-32 pb-24">
      <div className="container">
        <div className="text-center fade-up mb-16">
          <h1 className="text-5xl font-bold mb-6 font-heading">Our Services</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <div key={svc.id} id={svc.id} className="service-card p-8 rounded-2xl bg-white/5 border border-white/10 fade-up hover:border-primary/50 transition-colors" style={{ scrollMarginTop: '120px' }}>
              <h3 className="text-xl font-bold mb-4 font-heading">{svc.title}</h3>
              <p className="text-muted leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
