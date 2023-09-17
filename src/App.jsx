/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactTable from "./components/ContactTable";
import ContactInfo from "./components/ContactInfo";
import ContactDetails from "./components/ContactDetails";
import useSwr from "swr";

import "./App.css";

function Contacts({ windowDimension, contacts, setSelectedContactId }) {
  return windowDimension?.width <= 768 ? (
    contacts?.map((contact) => (
      <ContactInfo
        key={contact.id}
        isMobile
        contact={contact}
        setSelectedContactId={setSelectedContactId}
      />
    ))
  ) : (
    <ContactTable>
      {contacts?.map((contact) => (
        <ContactInfo
          key={contact.id}
          contact={contact}
          setSelectedContactId={setSelectedContactId}
        />
      ))}
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

  const { data: contacts } = useSwr("/api/users", fetchUserData);

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

  return (
    <>
      <Header />
      <div className="content">
        <div
          className={`search-section ${
            windowDimension.width <= 1024 && selectedContactId !== null
              ? "hide"
              : ""
          }`}
        >
          <SearchBar
            value={searchKeyword}
            setValue={setSearchKeyword}
            placeholder="Search user contact"
          />
        </div>
        <div className="contacts-section">
          {selectedContactId ? (
            <ContactDetails
              selectedId={selectedContactId}
              setSelectedContactId={setSelectedContactId}
            />
          ) : (
            <Contacts
              windowDimension={windowDimension}
              contacts={contacts}
              setSelectedContactId={setSelectedContactId}
            />
          )}
        </div>
      </div>
    </>
  );
}
