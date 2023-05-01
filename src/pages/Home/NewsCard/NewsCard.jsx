import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    details,
    image_url,
    total_view,
    rating,
    author,
  } = news;
  return (
    <Card className="my-4">
      <Card.Header className="d-flex gap-4 align-items-center">
        <Image
          style={{ height: "40px" }}
          src={author?.img}
          alt=""
          roundedCircle
        />
        <div className="flex-grow-1 mt-2">
          <p className="mb-0 fw-semibold">{author?.name}</p>

          <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
        </div>
        <div className="d-flex gap-2">
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Img variant="top" className="my-3" src={image_url}></Card.Img>

        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 300)}...{" "}
              <Link
                className="text-decoration-none fw-semibold ms-2 text-danger"
                to={`/news/${_id}`}
              >
                {" "}
                Read more
              </Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted d-flex gap-4 align-items-center">
        <div className="flex-grow-1">
          <Rating
            className="me-2 text-warning"
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
