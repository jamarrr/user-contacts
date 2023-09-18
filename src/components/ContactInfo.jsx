/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./ContactInfo.module.css";

export default function ContactInfo({ isMobile, contact }) {
  const navigate = useNavigate();

  const contactOnClickHandler = () => navigate(`contact/${contact.id}`);

  return isMobile ? (
    <div className={styles.contact} onClick={contactOnClickHandler}>
      {contact?.name ?? contact?.username}
    </div>
  ) : (
    <tr className={styles.tr} onClick={contactOnClickHandler}>
      <td className={styles.td}>{contact?.name}</td>
      <td className={styles.td}>{contact?.username}</td>
      <td className={styles.td}>{contact?.email}</td>
      <td className={styles.td}>{contact?.phone}</td>
    </tr>
  );
}
