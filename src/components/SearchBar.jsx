import SearchIcon from "./SearchIcon";
import styles from "./SearchBar.module.css";

/* eslint-disable react/prop-types */
export default function SearchBar({ value, placeholder, setValue }) {
  return (
    <div className={styles["search-input"]}>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon width={20} height={20} />
    </div>
  );
}
