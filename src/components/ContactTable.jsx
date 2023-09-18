/* eslint-disable react/prop-types */
import styles from "./ContactTable.module.css";

export default function ContactTable({ children }) {
  const headers = ["Name", "Username", "Email", "Phone"];

  return (
    <table className={styles["contact-list"]}>
      <thead>
        <tr>
          {headers.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
