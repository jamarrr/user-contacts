import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ContactTable from "./components/ContactTable";
import ContactInfo from "./components/ContactInfo";

import "./App.css";
import ContactDetails from "./components/ContactDetails";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(null);

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
            <ContactDetails setSelectedContactId={setSelectedContactId} />
          ) : (
            <ContactTable>
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
              <ContactInfo
                contact={{
                  id: 1,
                  name: "John Mar",
                  username: "Meg",
                  email: "meg@gmail.com",
                  phone: "0123456789",
                }}
                setSelectedContactId={setSelectedContactId}
              />
            </ContactTable>
          )}
        </div>
      </div>
    </>
  );
}
