import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.title}>
          <Image
            src="/images/penguin.png"
            className={styles["logo-image"]}
            alt="icon"
            width={50}
            height={50}
            priority
          />
          Praser
        </Link>
      </div>

      <div className={styles["nav-links"]}>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/more">More</Link>
      </div>
    </nav>
  );
};

export default Navbar;
