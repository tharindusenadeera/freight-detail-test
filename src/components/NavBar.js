import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/" className="nav-brand">
        Freights
      </NavbarBrand>
    </Navbar>
  );
}

export default NavBar;
