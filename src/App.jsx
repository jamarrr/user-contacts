/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactTable from "./components/ContactTable";
import ContactInfo from "./components/ContactInfo";
import ContactDetails from "./components/ContactDetails";
import useSwr from "swr";

import "./App.css";

function Contacts({
  windowDimension,
  isLoadingContacts,
  contacts,
  setSelectedContactId,
}) {
  return windowDimension?.width <= 768 ? (
    isLoadingContacts ? (
      <div className="no-item">Loading contact list...</div>
    ) : contacts?.length === 0 ? (
      <div className="no-item">No contact found.</div>
    ) : (
      contacts?.map((contact) => (
        <ContactInfo
          key={contact.id}
          isMobile
          contact={contact}
          setSelectedContactId={setSelectedContactId}
        />
      ))
    )
  ) : (
    <ContactTable>
      {isLoadingContacts ? (
        <tr>
          <td colSpan={4} className="no-item">
            Loading contact list...
          </td>
        </tr>
      ) : contacts?.length === 0 ? (
        <tr>
          <td colSpan={4} className="no-item">
            No contact found.
          </td>
        </tr>
      ) : (
        contacts?.map((contact) => (
          <ContactInfo
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
          />
        ))
      )}
    </ContactTable>
  );
}

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(null);

  /**
   * Get the list of contacts
   * @returns array of contacts
   */
  const fetchUserData = async () => {
    const contacts = await fetch("https://jsonplaceholder.typicode.com/users");
    return contacts.json();
  };

  const { data: contacts, isLoading } = useSwr("/api/users", fetchUserData);

  const [windowDimension, setWindowDimenstion] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowDimension = () => {
      setWindowDimenstion({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateWindowDimension);
  }, []);

  const [filteredContacts, setFilteredContacts] = useState([]);
  const [sortedContacts, setSortedContacts] = useState([]);

  useEffect(() => {
    const contactsToSort = contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setFilteredContacts(contactsToSort);
  }, [contacts, searchKeyword]);

  useEffect(() => {
    const sorted = contacts?.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return nameA.localeCompare(nameB);
    });

    setSortedContacts(sorted);
  }, [contacts]);

  return (
    <>
      <Header />
      <div className="content">
        {!selectedContactId && (
          <div className="search-section">
            <SearchBar
              value={searchKeyword}
              setValue={setSearchKeyword}
              placeholder="Search user contact"
            />
          </div>
        )}

        <div className="contacts-section">
          {selectedContactId ? (
            <ContactDetails
              selectedId={selectedContactId}
              setSelectedContactId={setSelectedContactId}
            />
          ) : (
            <Contacts
              isLoadingContacts={isLoading}
              windowDimension={windowDimension}
              contacts={searchKeyword ? filteredContacts : sortedContacts}
              setSelectedContactId={setSelectedContactId}
            />
          )}
        </div>
      </div>
    </>
  );
}
