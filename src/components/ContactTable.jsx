/* eslint-disable react/prop-types */
import styles from "./ContactTable.module.css";

export default function ContactTable({ children }) {
  return (
    <table className={styles["contact-list"]}>
      <thead>
        <tr>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Username</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>Phone</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
