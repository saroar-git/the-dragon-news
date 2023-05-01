import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error.message));
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="my-4">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Link
                className="text-decoration-none text-dark fw-medium"
                to="/category/0"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none mx-3 text-dark fw-medium"
                to="/"
              >
                About
              </Link>
              <Link className="text-decoration-none text-dark fw-medium" to="/">
                Career
              </Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center gap-3">
              {user && <FaUserCircle style={{ fontSize: "2rem" }} />}

              {user ? (
                <Button onClick={handleLogOut} variant="secondary">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  {" "}
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
