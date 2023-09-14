import ContactIcon from "./ContactIcon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <ContactIcon width={50} height={50} />
        <span>Contacts</span>
      </div>
    </header>
  );
}
