import { useEffect } from 'react';

// useScrollReveal — triggers .visible class when elements enter viewport
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once revealed for better performance
            // observer.unobserve(entry.target);
          } else {
            // Re-trigger animation on scroll back up
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
               entry.target.classList.remove('visible');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY * speed;
          el.style.transform = `translateY(${y}px)`;
          ticking = false;
        });
        ticking = true;
      }
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
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
          }
        );
      });
    });
  }, [containerRef]);
}
