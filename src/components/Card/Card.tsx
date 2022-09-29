import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
type cardItem = {
  id: number;
  title: String;
  category: String;
  description: String;
  image: String;
  price: Number;
  rating: Object;
};
const Card = ({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
}: cardItem) => {
  return (
    <div className="card">
      <Link style={{ textDecoration: "none" }} to={`products/${id}`}>
        <div className="cardWrapper">
          <div className="cardTop">
            <img src={image} alt="" className="cardImage" />
          </div>
          <div className="cardBottom">
            <span className="title">{title}</span>
            <span className="category">Category:{category}</span>
            <span className="price">Price:{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
