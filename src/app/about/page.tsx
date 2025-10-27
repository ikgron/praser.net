import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/About.module.css";

const About: React.FC = () => {
  return (
    <div>
      <title>About | Praser</title>

      <div className="header">
        <h1>About Me</h1>
        <p>Junior Software Developer</p>

        <div>
          <a
            href="https://codeberg.org/parser"
            target="_blank"
            rel="noopener noreferrer"
            title="Codeberg"
          >
            <Image
              className={styles.icon}
              src="/images/codeberg.svg"
              alt="Codeberg Icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://github.com/ikgron/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <Image
              className={styles.icon}
              src="/images/github.png"
              alt="Github Icon"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>

      <div className={styles.links}>
        <h1>About This Site</h1>
        <div
          style={{
            marginTop: "3vh",
          }}
        >
          <Link href="https://codeberg.org/parser/praser.net" target="_blank">
            Source Code
          </Link>
        </div>
        <div
          style={{
            marginTop: "3vh",
          }}
        >
          <Link
            href="https://developer.mozilla.org/en-US/observatory/analyze?host=praser.net"
            target="_blank"
          >
            Security
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
