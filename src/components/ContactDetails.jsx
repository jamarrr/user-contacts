/* eslint-disable react/prop-types */
import styles from "./ContactDetails.module.css";

export default function ContactDetails({ setSelectedContactId }) {
  return (
    <>
      <div className={styles.action}>
        <button
          className={styles.btn}
          onClick={() => setSelectedContactId(null)}
        />
      </div>
      <div className={styles["name-container"]}>
        <div className={styles.section}>
          <h3 className={styles["row-label"]}>Full name</h3>
          <h4>John Mar Abarientos</h4>
        </div>
        <div className={styles.section}>
          <h3 className={styles["row-label"]}>Username</h3>
          <h4>Migibuy</h4>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Address</h3>
        <h4>Quisao, Pililla, Rizal, Philippines</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Contact number</h3>
        <h4>123456789</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Website</h3>
        <h4>https://google.com</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Company</h3>
        <h4>Google</h4>
        <h5>Google</h5>
      </div>
    </>
  );
}
