import Link from "next/link";

import styles from "./portfolio.module.css";
import "@/app/globals.css";

export default function Portfolio() {
  return (
    <div className="header">
      <title>Portfolio | Praser</title>

      <div>
        <h1>Some of my work:</h1>
      </div>

      <div className="container">
        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioItem}>
            <Link href="/list-sorter/">
              <img
                src="/images/sorter.png"
                alt="Project 1"
                loading="lazy"
                className={styles.portfolioImage}
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

          {/* placeholder
                    <div className={styles.portfolioItem}>
                        <Link href="/">
                            <img
                                src="/"
                                alt="Project 2"
                                loading="lazy"
                                className={styles.portfolioImage}
                            />
                            <div className={styles.portfolioInfo}>
                                <h1>FILL</h1>
                                <p>FILL</p>
                            </div>
                        </Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
