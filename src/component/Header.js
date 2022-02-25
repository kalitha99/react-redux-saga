import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBScrollspyNavItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "10px" }}>
              <MDBIcon fas icon="book-open" />
            </span>
            Contacts
          </MDBNavbarBrand>
          <MDBNavbarToggler
            data-target="navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => setShow(!show)}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={show}>
            <MDBNavbarNav className="mr-auto mb2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/" className="text-white">
                    Home
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/add" className="text-white">
                    Add user
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink className="nav-link">
                  <NavLink to="/about" className="text-white">
                    About 
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
