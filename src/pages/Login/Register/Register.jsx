import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  // after register go login page
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        if (createUser) {
          alert("Account created successful. Please login.");
        }

        setError("");
        navigate("/login");

        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <>
      <h4
        className="container text-center"
        style={{
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        Please Register
      </h4>
      <Container className="mx-auto card p-5 mb-5" style={{ width: "35%" }}>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept{" "}
                  <Link
                    className="text-decoration-none fw-semibold"
                    to="/terms"
                  >
                    T&C
                  </Link>
                </>
              }
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="secondary"
              disabled={!accepted}
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </div>

          <div className="text-secondary text-center fw-semibold my-3">
            <Form.Text>
              Already have an account?{" "}
              <Link
                className="ms-1 fw-semibold text-success text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            </Form.Text>
          </div>

          <div className="text-center">
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Register;
