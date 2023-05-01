import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShortCard from "./ShortCard";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-saroar-git.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h5 className="fw-bold">All Category</h5>
      <div className="py-2">
        {categories.map((category) => (
          <h6 className="my-3 bg-light py-3 px-4 rounded" key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary fw-semibold"
            >
              {category.name}
            </Link>
          </h6>
        ))}
      </div>
      <ShortCard />
    </>
  );
};

export default LeftNav;
