import { useEffect } from 'react';

// useScrollReveal — triggers .visible class when elements enter viewport
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.fade-up, .fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// useParallax — simple parallax on scroll
export function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const handleScroll = () => {
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
}

// useGSAPReveal — stagger animation using GSAP
export function useGSAPReveal(containerRef) {
  useEffect(() => {
    let gsap, ScrollTrigger;
    import('gsap').then((g) => {
      gsap = g.gsap || g.default;
      import('gsap/ScrollTrigger').then((st) => {
        ScrollTrigger = st.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        if (!containerRef.current) return;
        const items = containerRef.current.querySelectorAll('[data-reveal]');
        if (!items.length) return;
        gsap.fromTo(
          items,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      });
    });
  }, [containerRef]);
}
