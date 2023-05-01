import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center py-4">
        <img src={logo} alt="" />
        <p className="text-secondary mt-3 mb-2">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM d, YYYY")}</p>
      </div>
      <div className="my-4 d-flex bg-light px-3 py-2 rounded">
        <Button className="px-4 py-3" variant="danger">
          Latest
        </Button>
        <Marquee speed={80} className="fw-bold fs-5">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet..
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
