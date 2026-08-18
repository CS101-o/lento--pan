import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Header() {
  const hidden = useScrollDirection();

  return (
    <header className={hidden ? 'topbar topbar-hidden' : 'topbar'}>
      <a className="mark" href="#hero">
        <img src="/assets/images/lentopan-icon.png" alt="" />
        LENTOPAN
      </a>
    </header>
  );
}
