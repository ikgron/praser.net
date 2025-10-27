import Link from "next/link";
import styles from "@/styles/More.module.css";

const Tools: React.FC = () => {
  return (
    <div className="header">
      <title>More | Praser</title>

      <h1>More</h1>

      <div>
        <Link href="/more/list-sorter" className={styles.toolsButton}>
          List Sorter
        </Link>
      </div>
    </div>
  );
};

export default Tools;
