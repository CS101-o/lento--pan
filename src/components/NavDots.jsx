import { useEffect, useRef } from 'react';
import { SECTIONS } from '../nav';

export default function NavDots() {
  const navRef = useRef(null);

  useEffect(() => {
    const dotEls = navRef.current.querySelectorAll('a');
    const targets = document.querySelectorAll('main .hero-block, main section.page');
    if (!targets.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            dotEls.forEach((d) => d.classList.toggle('active', d.dataset.target === entry.target.id));
          }
        });
      },
      { threshold: 0.35 }
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <nav className="dots" ref={navRef}>
      {SECTIONS.map((section) => (
        <a key={section.id} href={`#${section.id}`} data-target={section.id}>
          <span className="tip">{section.label}</span>
        </a>
      ))}
    </nav>
  );
}
