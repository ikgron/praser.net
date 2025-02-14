import styles from './Tools.module.css';
import '@/app/globals.css';
import Link from 'next/link';

export default function Tools() {
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
}
