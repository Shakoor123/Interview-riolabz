import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const filter = useSelector((state) => state.filter);
  console.log(filter.filter);

  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products").then(async (res) =>
        setProducts(await res.json())
      );
      if (filter.filter) {
        setFilterProducts(
          products.filter((product) => {
            if (product.category == filter.filter) {
              return product;
            }
          })
        );
      } else {
        setFilterProducts(products);
      }
    };
    getProducts();
  }, [filter.filter, products]);
  // useEffect(() => {
  //   setFilterProducts(
  //     products.filter((product) => {
  //       if (product.category == filter.filter) {
  //         return product;
  //       }
  //     })
  //   );
  // }, []);
  // console.log(filterProducts);

  return (
    <div className="productlist">
      <div className="productlistwrapper">
        {filterProducts.map((product) => (
          <Card key={product} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
