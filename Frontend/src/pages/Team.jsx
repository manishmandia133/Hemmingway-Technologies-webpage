import { useRef } from 'react';
import { useScrollReveal, useGSAPReveal } from '../hooks/useAnimations';

const TEAM_MEMBERS = [
  {
    name: 'Alex Hemmingway',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in enterprise software. Obsessed with building teams that ship.' ,
    emoji: '👨‍💼',
    expertise: ['Strategy', 'Leadership', 'Architecture']
  },
  {
    name: 'Natasha Voss',
    role: 'Chief Technology Officer',
    bio: 'Former Google engineer. Architect of our entire infrastructure and AI initiatives.',
    emoji: '👩‍💻',
    expertise: ['AI/ML', 'Cloud', 'DevOps']
  },
  {
    name: 'James Park',
    role: 'Head of Design',
    bio: 'Award-winning designer who believes code and design are inseparable.',
    emoji: '🎨',
    expertise: ['UI/UX', 'Design Systems', 'Branding']
  },
  {
    name: 'Layla Osei',
    role: 'Engineering Lead',
    bio: 'Full-stack wizard. Mentor to 12+ junior engineers and obsessive about code quality.',
    emoji: '⚙️',
    expertise: ['Full Stack', 'Mentorship', 'Performance']
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Frontend Engineer',
    bio: 'React expert. Builds pixel-perfect interfaces that perform flawlessly at scale.',
    emoji: '💻',
    expertise: ['React', 'Performance', 'Animation']
  },
  {
    name: 'Elena Rodriguez',
    role: 'Security & Compliance Lead',
    bio: 'Keeps us safe. Former cybersecurity researcher with passion for zero-trust architecture.',
    emoji: '🔐',
    expertise: ['Security', 'Compliance', 'Cryptography']
  },
];

export default function Team() {
  useScrollReveal();
  const gridRef = useRef(null);
  useGSAPReveal(gridRef);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag fade-in visible">Our Team</div>
          <h1 className="fade-up visible">
            Meet the<br />
            <span className="gradient-text">people behind the magic</span>
          </h1>
          <p className="fade-up visible" style={{ transitionDelay: '0.15s' }}>
            A diverse group of engineers, designers, and leaders united by a passion for excellence. We hire for talent and culture fit — people who care deeply about shipping great software.
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="team-section">
        <div className="container">
          <div ref={gridRef} className="team-grid">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.name} className="team-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="team-card-emoji">{member.emoji}</div>
                <h3 className="team-card-name">{member.name}</h3>
                <div className="team-card-role">{member.role}</div>
                <p className="team-card-bio">{member.bio}</p>
                <div className="team-card-expertise">
                  {member.expertise.map(skill => (
                    <span key={skill} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                <div className="team-card-hover">
                  <a href="#contact" className="team-card-link">Get in touch →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section className="team-culture">
        <div className="container">
          <h2>Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-item fade-in">
              <div className="culture-icon">🚀</div>
              <h4>Autonomy</h4>
              <p>We trust our people to make decisions. Minimal process, maximum ownership.</p>
            </div>
            <div className="culture-item fade-in" style={{ transitionDelay: '0.1s' }}>
              <div className="culture-icon">🧠</div>
              <h4>Growth</h4>
              <p>$5K/year learning budget. Conferences. Books. We invest in your development.</p>
            </div>
            <div className="culture-item fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="culture-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Cross-functional teams. Flat structure. Your voice matters at every level.</p>
            </div>
            <div className="culture-item fade-in" style={{ transitionDelay: '0.3s' }}>
              <div className="culture-icon">💡</div>
              <h4>Innovation</h4>
              <p>20% time for personal projects. We celebrate bold ideas and smart failures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="team-cta">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented engineers and designers. Check out our open positions.</p>
          <a href="#contact" className="btn btn-primary">View Careers →</a>
        </div>
      </section>
    </>
  );
}
