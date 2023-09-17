/* eslint-disable react/prop-types */
import styles from "./ContactInfo.module.css";

export default function ContactInfo({
  isMobile,
  contact,
  setSelectedContactId,
}) {
  return isMobile ? (
    <div
      className={styles.contact}
      onClick={() => setSelectedContactId(contact?.id)}
    >
      {contact?.name ?? contact?.username}
    </div>
  ) : (
    <tr className={styles.tr} onClick={() => setSelectedContactId(contact?.id)}>
      <td className={styles.td}>{contact?.name}</td>
      <td className={styles.td}>{contact?.username}</td>
      <td className={styles.td}>{contact?.email}</td>
      <td className={styles.td}>{contact?.phone}</td>
    </tr>
  );
}
