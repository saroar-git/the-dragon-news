import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // after login go home page
  const navigate = useNavigate();

  // after login go wanted page before login
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/category/0";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from);
        setSuccess("Logged in successful");
        setError("");

        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
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
        Please Login
      </h4>
      <Container className="mx-auto card p-5 mb-5" style={{ width: "30%" }}>
        <Form onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" type="submit">
              Login
            </Button>
          </div>

          <div className="text-secondary text-center fw-semibold my-3">
            <Form.Text>
              Don't have any account?{" "}
              <Link
                className="ms-1 fw-semibold text-danger text-decoration-none"
                to="/register"
              >
                Register
              </Link>
            </Form.Text>
          </div>

          <div className="text-center">
            <Form.Text className="text-success">{success}</Form.Text> <br />
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
