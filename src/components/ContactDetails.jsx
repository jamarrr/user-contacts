/* eslint-disable react/prop-types */
import CONSTANT_VALUES from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ContactDetails.module.css";
import useSwr from "swr";

function Detail({ label, detail }) {
  return (
    <div className={styles.section}>
      <h3 className={styles["row-label"]}>{label}</h3>
      <h4>{detail}</h4>
    </div>
  );
}

export default function ContactDetails() {
  const navigate = useNavigate();
  const { contactId: selectedId } = useParams();

  /**
   * Fetcher for contact details depending on the selected id passed
   * @param {*} id
   * @returns contact details obj
   */
  const fetchContactDetails = async (id) => {
    const contactDetails = await fetch(`${CONSTANT_VALUES.usersURL}/${id}`);
    return contactDetails.json();
  };

  const formatAddress = (address) =>
    `${address.suite}, ${address.street}, ${address.city} (Zipcode: ${address.zipcode})`;

  // swr request for contact details
  const { data: contactDetails, isLoading } = useSwr(
    selectedId,
    fetchContactDetails
  );

  if (isLoading)
    return (
      <div className={styles.container}>
        <div className="no-item">{CONSTANT_VALUES.loadingContactDetails}</div>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.action}>
        <button className={styles.btn} onClick={() => navigate("/")} />
      </div>
      <div className={styles["name-container"]}>
        <Detail label="Full name" detail={contactDetails?.name} />
        <Detail label="Username" detail={contactDetails?.username} />
      </div>

      <Detail label="Address" detail={formatAddress(contactDetails?.address)} />
      <Detail label="Contact number" detail={contactDetails?.phone} />
      <Detail label="Website" detail={contactDetails?.website} />
      <Detail label="Company" detail={contactDetails?.company.name} />
    </div>
  );
}
