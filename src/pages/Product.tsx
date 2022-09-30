import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState({
    image: "",
    title: "",
    category: "",
    description: "",
    price: 0,
    rating: {},
  });
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const getproduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
    };
    getproduct();
  }, []);
  console.log(product);

  return (
    <>
      <div className="product">
        <div className="productLeft">
          <img src={product.image} alt="" className="productImage" />
        </div>
        <div className="productRight">
          <span className="categores">
            <span className="headding">{product.title}</span>
          </span>
          <span className="categores">
            Category :~ <span className="value">{product.category}</span>
          </span>
          <span className="categores">
            About :~ <span className="value">{product.description}</span>
          </span>
          <span className="categores">
            Price :~ <span className="value">{product.price}</span>
          </span>
          <span className="categores">
            {/* @ts-ignore */}
            Raiting :~ <span className="value">{product.rating.ratea}</span>
          </span>
          <span className="categores">
            {/* @ts-ignore */}
            Peoples :~ <span className="value">{product.rating.count}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
