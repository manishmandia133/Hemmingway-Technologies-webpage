import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* ─────────────────────────────────────────
   Aceternity-style dropdown components
───────────────────────────────────────── */

function HoveredLink({ href, to, children }) {
  const style = {
    display: 'block',
    padding: '6px 0',
    color: 'var(--text)',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'color 0.2s',
    textDecoration: 'none',
  };
  const onEnter = e => (e.currentTarget.style.color = 'var(--primary)');
  const onLeave = e => (e.currentTarget.style.color = 'var(--text)');
  if (to) return <Link to={to} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</Link>;
  return <a href={href} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</a>;
}

function ProductItem({ title, description, href, emoji }) {
  return (
    <a
      href={href}
      className="product-item"
      style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px', borderRadius: '10px', transition: 'background 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-light)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'var(--primary-light)', border: '1px solid rgba(99,103,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
        {emoji}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-bright)', marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>{description}</div>
      </div>
    </a>
  );
}

function MenuItem({ label, children, active, setActive }) {
  const isOpen = active === label;
  return (
    <div
      className="menu-item-wrap"
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
    >
      <button className={`menu-item-btn${isOpen ? ' open' : ''}`}>
        {label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: 4 }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className={`menu-dropdown${isOpen ? ' open' : ''}`}>
        <div className="menu-dropdown-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Encrypted text hook (for nav hover)
───────────────────────────────────────── */
function useEncrypt(text, active) {
  const [display, setDisplay] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const raf = useRef(null);
  useEffect(() => {
    if (!active) { setDisplay(text); return; }
    let iter = 0;
    const step = () => {
      setDisplay(text.split('').map((c, i) => c === ' ' ? ' ' : i < iter ? text[i] : chars[Math.floor(Math.random() * chars.length)]).join(''));
      if (iter < text.length) { iter += 0.7; raf.current = requestAnimationFrame(step); }
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [active, text]);
  return display;
}

function NavLink({ to, label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  const display = useEncrypt(label.toUpperCase(), hovered);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link${isActive ? ' active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {display}
    </Link>
  );
}

/* ─────────────────────────────────────────
   Theme Toggle
───────────────────────────────────────── */
function ThemeToggle({ theme, toggle }) {
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
        <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────── */
export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); window.scrollTo(0, 0); }, [location.pathname]);

  const isActive = p => location.pathname === p;

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} onMouseLeave={() => setActiveMenu(null)}>
        <div className="nav-inner">

          {/* ── LOGO: leaf icon + brand text ── */}
          <Link to="/" className="nav-logo">
            <img src="/logo-icon.png" alt="" className="nav-logo-icon" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Hemmingway</span>
              <span className="nav-logo-sub">Technologies</span>
            </div>
          </Link>

          {/* ── CENTER: Aceternity-style menu ── */}
          <div className="nav-menu-center">
            <MenuItem label="Services" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-cols-2">
                <div>
                  <div className="dropdown-section-label">What We Build</div>
                  <HoveredLink to="/#services">Custom Software</HoveredLink>
                  <HoveredLink to="/#services">AI & Machine Learning</HoveredLink>
                  <HoveredLink to="/#services">Cloud Architecture</HoveredLink>
                  <HoveredLink to="/#services">Cybersecurity</HoveredLink>
                </div>
                <div>
                  <div className="dropdown-section-label">Platforms</div>
                  <HoveredLink to="/#services">Mobile & Web Apps</HoveredLink>
                  <HoveredLink to="/#services">API Integration</HoveredLink>
                  <HoveredLink to="/#services">Data Analytics</HoveredLink>
                  <HoveredLink to="/#services">DevOps & Cloud</HoveredLink>
                </div>
              </div>
            </MenuItem>

            <MenuItem label="Solutions" active={activeMenu} setActive={setActiveMenu}>
              <div className="dropdown-products">
                <ProductItem emoji="🚀" title="Launchpad" description="From idea to production-ready MVP in 6 weeks." href="#" />
                <ProductItem emoji="🧠" title="AI Suite" description="Custom LLM integrations & intelligent automation." href="#" />
                <ProductItem emoji="☁️" title="CloudOps" description="Managed cloud infrastructure at enterprise scale." href="#" />
                <ProductItem emoji="🔐" title="SecureStack" description="Full-stack security audit & hardening service." href="#" />
              </div>
            </MenuItem>

            <MenuItem label="Company" active={activeMenu} setActive={setActiveMenu}>
              <div>
                <div className="dropdown-section-label">Who We Are</div>
                <HoveredLink to="/about">About Us</HoveredLink>
                <HoveredLink to="/team">Our Team</HoveredLink>
                <HoveredLink to="/blog">Blog</HoveredLink>
                <HoveredLink href="#">Careers</HoveredLink>
                <HoveredLink href="#">Press Kit</HoveredLink>
              </div>
            </MenuItem>

            <NavLink to="/" label="Home" isActive={isActive('/')} />
          </div>

          {/* ── RIGHT ── */}
          <div className="nav-cta">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <Link to="/contact" className="nav-btn ghost">Contact</Link>
            <Link to="/contact" className="nav-btn primary">
              Get in Touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* ── HAMBURGER ── */}
          <button className={`nav-hamburger${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-menu-logo">
          <img src="/logo-icon.png" alt="" style={{ height: 36, filter: 'drop-shadow(0 0 12px rgba(99,103,241,0.6))' }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', fontFamily: 'var(--heading)' }}>Hemmingway<br /><span style={{ color: 'var(--primary)' }}>Technologies</span></span>
        </div>
        <div className="mobile-menu-links">
          {[['/', 'Home'], ['/about', 'About'], ['/team', 'Team'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([to, label], i) => (
            <Link key={to} to={to} className="mobile-link" onClick={() => setMobileOpen(false)}>
              <span className="mobile-link-num">0{i + 1}</span>{label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <Link to="/contact" className="nav-btn primary" onClick={() => setMobileOpen(false)}>Start a Project →</Link>
        </div>
        <div className="mobile-orb mobile-orb-1" />
        <div className="mobile-orb mobile-orb-2" />
      </div>
    </>
  );
}
