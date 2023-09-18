/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CONSTANT_VALUES from "../utils/constants";
import useSwr from "swr";
import ContactTable from "./ContactTable";
import ContactLoader, { ContactTableLoader } from "./Loader";
import ContactInfo from "./ContactInfo";
import SearchBar from "./SearchBar";
import "../App.css";

/**
 * Component for the rows of the contact list
 */
function ContactList({ contacts, isMobile = false }) {
  return contacts?.map((contact) => (
    <ContactInfo key={contact.id} isMobile={isMobile} contact={contact} />
  ));
}

/**
 * Conditional component for displaying either the small screen version of the app,
 * larger screen version, and the largest screen version
 * To-do: Remove nested ternary operators
 */
function Contacts({ windowDimension, isLoadingContacts, contacts }) {
  return windowDimension?.width <= 768 ? (
    isLoadingContacts ? (
      <ContactLoader message={CONSTANT_VALUES.loadingContacts} />
    ) : contacts?.length === 0 ? (
      <ContactLoader message={CONSTANT_VALUES.noContactsFound} />
    ) : (
      <ContactList contacts={contacts} isMobile />
    )
  ) : (
    <ContactTable>
      {isLoadingContacts ? (
        <ContactTableLoader message={CONSTANT_VALUES.loadingContacts} />
      ) : contacts?.length === 0 ? (
        <ContactTableLoader message={CONSTANT_VALUES.noContactsFound} />
      ) : (
        <ContactList contacts={contacts} />
      )}
    </ContactTable>
  );
}

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [sortedContacts, setSortedContacts] = useState([]);
  const [windowDimension, setWindowDimenstion] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  /**
   * Get the list of contacts
   * @returns array of contacts
   */
  const fetchUserData = async () => {
    const contacts = await fetch(CONSTANT_VALUES.usersURL);
    return contacts.json();
  };

  const { data: contacts, isLoading } = useSwr(
    CONSTANT_VALUES.usersURL,
    fetchUserData
  );

  /**
   * Create event lilsted in window resize
   */
  useEffect(() => {
    const updateWindowDimension = () => {
      setWindowDimenstion({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateWindowDimension);
  }, []);

  /**
   * Filter contacts list depending on the user input
   */
  useEffect(() => {
    const contactsToFilter = contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setFilteredContacts(contactsToFilter);
  }, [contacts, searchKeyword]);

  /**
   * Sort contact list in ascending order
   */
  useEffect(() => {
    const sorted = contacts?.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return nameA.localeCompare(nameB);
    });

    setSortedContacts(sorted);
  }, [contacts]);

  return (
    <div className="content">
      <div className="search-section">
        <SearchBar
          value={searchKeyword}
          setValue={setSearchKeyword}
          placeholder="Search user contact"
        />
      </div>

      <div className="contacts-section">
        <Contacts
          isLoadingContacts={isLoading}
          windowDimension={windowDimension}
          contacts={searchKeyword ? filteredContacts : sortedContacts}
        />
      </div>
    </div>
  );
}
