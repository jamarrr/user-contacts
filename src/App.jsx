/* eslint-disable react/prop-types */
import Header from "./components/Header";
import ContactDetails from "./components/ContactDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/contact/:contactId"
            element={<ContactDetails />}
          />
          <Route path="*" element={<div>Page Not Found.</div>} />
        </Routes>
      </Router>
    </>
  );
}
