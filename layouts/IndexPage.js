import React from "react";

// components

// import AdminNavbar from "../components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
import IndexNavbar from "../components/Navbars/IndexNavbar.jsx";
import Footer from "../components/Footers/Footer.js";

export default function IndexPage({ children }) {
  return (
    <>
      <IndexNavbar />
      {children}
      <Footer />
    </>
  );
}
