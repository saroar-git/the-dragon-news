import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <>
      {id && (
        <h4 className="fw-bold text-center">
          Category news: {categoryNews.length}
        </h4>
      )}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </>
  );
};

export default Category;
