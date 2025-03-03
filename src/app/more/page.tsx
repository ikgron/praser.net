import Link from 'next/link';

import styles from './More.module.css';
import '@/app/globals.css';

const Tools = () => {
  return (
    <div className="header">
      <title>More | Praser</title>

      <h1>More</h1>

      <div>
        <Link href="/list-sorter" className={styles.toolsButton}>
          List Sorter
        </Link>
      </div>
    </div>
  );
};

export default Tools;
