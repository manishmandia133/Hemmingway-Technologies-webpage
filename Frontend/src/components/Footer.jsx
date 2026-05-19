import { Link } from 'react-router-dom';

const COLS = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Pricing', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter / X', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      {/* top separator */}
      <div className="ftr-sep" />

      {/* ── MAIN ROW ── */}
      <div className="ftr-main">
        {/* LEFT: brand + copyright */}
        <div className="ftr-brand">
          <div className="ftr-brand-id">
            <img src="/logo-icon.png" alt="Hemmingway" className="ftr-brand-icon" />
            <span className="ftr-brand-name">Hemmingway Technologies</span>
          </div>
          <p className="ftr-copyright">
            © copyright Hemmingway Technologies {year}.<br />All rights reserved.
          </p>
        </div>

        {/* RIGHT: link columns */}
        <div className="ftr-cols">
          {COLS.map(col => (
            <div key={col.title} className="ftr-col">
              <h5 className="ftr-col-title">{col.title}</h5>
              <ul>
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.to
                      ? <Link to={link.to} className="ftr-link">{link.label}</Link>
                      : <a href={link.href} className="ftr-link">{link.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── GIANT WATERMARK ── */}
      <div className="ftr-watermark" aria-hidden="true">Hemmingway</div>
    </footer>
  );
}
