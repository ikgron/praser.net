import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/portfolio.module.css";

const Portfolio: React.FC = () => {
  return (
    <div className="header">
      <title>Portfolio | Praser</title>

      <div>
        <h1>Some of my work:</h1>
      </div>

      <div className="container">
        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioItem}>
            <Link href="/more/list-sorter/">
              <Image
                src="/images/sorter.png"
                alt="Project 1"
                loading="lazy"
                className={styles.portfolioImage}
                width={300}
                height={300}
              />
              <div className={styles.portfolioInfo}>
                <h1>List Sorter</h1>
                <p>
                  A simple sorter that organizes items into a list by their
                  first character or length. Recognizes characters from
                  different languages.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
