/* eslint-disable react/prop-types */
import styles from "./ContactTable.module.css";

export default function ContactTable({ children }) {
  return (
    <table className={styles["contact-list"]}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
