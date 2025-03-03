// import styles from './Contact.module.css';
import '@/app/globals.css';

const Contact: React.FC = () => {
  return (
    <div className="header">
      <title>Contact | Praser</title>

      <h1>Contact me!</h1>
      <p>
        Email: <a href="mailto:contactme@praser.net">contactme@praser.net</a>
      </p>
    </div>
  );
};

export default Contact;
