import ContactIcon from "./ContactIcon";
import styles from "./Header.module.css";
import SearchIcon from "./SearchIcon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <ContactIcon width={50} height={50} />
        <span>Contacts</span>
      </div>
      <SearchIcon width={35} height={35} />
    </header>
  );
}
