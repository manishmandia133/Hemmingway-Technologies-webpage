import { useEffect, useRef } from 'react';

// Comet card with 3D tilt effect — inspired by /componets/comet card.jsx
export default function CometCard({ children, className = '' }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -10;
      const rotateY = ((x - cx) / cx) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

      // Comet glow follow
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,103,241,0.15) 0%, var(--bg-card) 60%)`;
    };

    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.background = 'var(--bg-card)';
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`comet-card ${className}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        transition: 'transform 0.1s ease, background 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
