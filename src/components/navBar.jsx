import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
    padding: "1rem",
  };

  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/projects" style={linkStyle}>
        Our Works
      </Link>
      <Link to="/team" style={linkStyle}>
        Clients
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}
