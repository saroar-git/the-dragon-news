import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsights from "../EditorInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, category_id, image_url } = news;
  return (
    <>
      <Card className="mb-5">
        <Card.Body>
          <Card.Img variant="top" src={image_url}></Card.Img>
          <Card.Title className="my-4">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button className="btn-danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </>
  );
};

export default News;
