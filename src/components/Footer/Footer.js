
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.coderex.co/">
              Core Rex
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.coderex.co/about/">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.coderex.co/blog/">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://maizied.vercel.app/"
            target="_blank"
          >
            Maizied
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
