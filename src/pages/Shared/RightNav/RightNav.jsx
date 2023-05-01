import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <>
      <h5 className="fw-bold py-1">Login with</h5>
      <Button className="px-5" variant="outline-primary">
        <FaGoogle className="me-2" />
        Login with Google
      </Button>
      <br />
      <Button className="my-2 px-5" variant="outline-secondary">
        <FaGithub className="me-2" /> Login with Github
      </Button>

      <div className=" my-4">
        <h5 className="fw-bold py-1">Find Us On</h5>

        <ListGroup>
          <ListGroup.Item className="my-1 ps-4">
            <FaFacebook className="me-2 text-primary" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="my-1 ps-4">
            <FaInstagram className="me-2 text-danger" /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="my-1 ps-4">
            <FaTwitter className="me-2 text-primary" /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>

      <QZone />

      <div className="my-3 p-3 position-relative">
        <img src={bg} alt="" />
        <div className="position-absolute pt-5 top-0 start-0 text-center text-white">
          <h2 className="pt-5 px-3">Create an Amazing Newspaper</h2>
          <p className="px-3 my-4">
            <small>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </small>
          </p>
          <Button className="py-3 px-4 mt-4" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
};

export default RightNav;
