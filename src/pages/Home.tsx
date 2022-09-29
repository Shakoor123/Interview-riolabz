import React from "react";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList/ProductList";
import "./Home.css";
const home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Filter />
      <ProductList />
    </div>
  );
};

export default home;
