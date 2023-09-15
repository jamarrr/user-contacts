import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactTable from "./components/ContactTable";
import ContactInfo from "./components/ContactInfo";
import ContactDetails from "./components/ContactDetails";
import useSwr from "swr";

import "./App.css";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(null);

  const fetchUserData = async () => {
    const contacts = await fetch("https://jsonplaceholder.typicode.com/users");
    return contacts.json();
  };

  const { data: contacts } = useSwr("/api/users", fetchUserData);

  return (
    <>
      <Header />
      <div className="content">
        <div className="search-section">
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
            <ContactTable>
              {contacts?.map((contact) => (
                <ContactInfo
                  key={contact.id}
                  contact={contact}
                  setSelectedContactId={setSelectedContactId}
                />
              ))}
            </ContactTable>
          )}
        </div>
      </div>
    </>
  );
}
