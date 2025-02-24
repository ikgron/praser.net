import Link from 'next/link';

import './Navbar.component.css';
import '@/app/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" className="title">
          <img src="/images/penguin.png" className="logo-image" alt="icon" />
          Praser
        </Link>
      </div>

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/more">More</Link>
      </div>
    </nav>
  );
}
