import { useEffect, useRef } from 'react';

// Encrypted text effect — inspired by the component in /componets/encripted text.jsx
export default function EncryptedText({ text, className = '', speed = 40 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let iteration = 0;
    let interval;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        interval = setInterval(() => {
          // Create fresh pool for unrevealed characters only
          const unrevealedIndices = [];
          text.split('').forEach((char, idx) => {
            if (char !== ' ' && idx >= iteration) {
              unrevealedIndices.push(idx);
            }
          });

          const encryptedText = text
            .toLowerCase()
            .split('')
            .map((char, idx) => {
              if (char === ' ') return ' ';
              if (idx < iteration) return text[idx];
              // Pick random unrevealed character
              if (unrevealedIndices.length > 0) {
                const randomPos = Math.floor(Math.random() * unrevealedIndices.length);
                return text[unrevealedIndices[randomPos]];
              }
              return char;
            })
            .join('');
            
          el.textContent = encryptedText;
          
          if (iteration >= text.length) clearInterval(interval);
          iteration += 0.5;
        }, speed);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => { clearInterval(interval); observer.disconnect(); };
  }, [text, speed]);

  return <span ref={ref} className={className} style={{ display: 'inline-block', fontFamily: 'var(--mono)', letterSpacing: '0' }}>{text}</span>;
}
