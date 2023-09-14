import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
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
      </div>
    </>
  );
}
