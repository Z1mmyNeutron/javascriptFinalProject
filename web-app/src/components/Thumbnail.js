import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Thumbnail = ({ id, title, description, imgSrc }) => {
  return (
    <Link
      to={`/article/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="thumbnail thumbnail-container">
        <img src={imgSrc} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Thumbnail;
