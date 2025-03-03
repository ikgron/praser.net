import Link from 'next/link';
import Image from 'next/image';

import './Navbar.component.css';
import '@/app/globals.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" className="title">
          <Image
            src="/images/penguin.png"
            className="logo-image"
            alt="icon"
            width={50}
            height={50}
          />
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
};

export default Navbar;
