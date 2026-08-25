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
      // Viewport-relative, not element-height-relative: a threshold ratio
      // requires that fraction of the *section's own height* to be visible,
      // which breaks for tall sections (e.g. product cards stacked to a
      // single column on mobile) — content stays hidden well after it's
      // scrolled into view. rootMargin triggers as soon as a section
      // crosses into the top 70% of the viewport, regardless of its height.
      { threshold: 0, rootMargin: '0px 0px -30% 0px' }
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
