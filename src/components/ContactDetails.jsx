/* eslint-disable react/prop-types */
import styles from "./ContactDetails.module.css";
import useSwr from "swr";

export default function ContactDetails({ selectedId, setSelectedContactId }) {
  /**
   * Fetcher for contact details depending on the selected id passed
   * @param {*} id
   * @returns contact details obj
   */
  const fetchContactDetails = async (id) => {
    const contactDetails = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return contactDetails.json();
  };

  // swr request for contact details
  const { data: contactDetails, isLoading } = useSwr(
    selectedId,
    fetchContactDetails
  );

  if (isLoading)
    return <div className="no-item">Loading contact details...</div>;

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
          <h4>{contactDetails?.name}</h4>
        </div>
        <div className={styles.section}>
          <h3 className={styles["row-label"]}>Username</h3>
          <h4>{contactDetails?.username}</h4>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Address</h3>
        <h4>{`${contactDetails?.address?.suite}, ${contactDetails?.address?.street}, ${contactDetails?.address?.city} - Zipcode: ${contactDetails?.address?.zipcode}`}</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Contact number</h3>
        <h4>{contactDetails?.phone}</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Website</h3>
        <h4>{contactDetails?.website}</h4>
      </div>

      <div className={styles.section}>
        <h3 className={styles["row-label"]}>Company</h3>
        <h4>{contactDetails?.company?.name}</h4>
      </div>
    </>
  );
}
