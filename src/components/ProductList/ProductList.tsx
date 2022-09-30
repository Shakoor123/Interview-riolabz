import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Page from "../Page/Page";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const filter = useSelector((state: any) => state.filter);
  const [totalPosts, settotalPosts] = useState(0);
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const lastpostIndex = currentPage * postPerPage;
  const firstPostIndex = lastpostIndex - postPerPage;
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products").then(async (res) =>
        setProducts(await res.json())
      );
      if (filter.filter) {
        setFilterProducts(
          products.filter((product: any) => {
            if (product.category == filter.filter) {
              return product;
            }
          })
        );
      } else {
        setFilterProducts(products);
      }
      settotalPosts(filterProducts.length);
    };
    getProducts();
  }, [filter.filter, products]);
  useEffect(() => {
    setCurrentPageProducts(filterProducts.slice(firstPostIndex, lastpostIndex));
  }, [firstPostIndex, lastpostIndex, currentPage, filterProducts]);
  useEffect(() => {
    setCurrentPage(1);
  }, [filter.filter]);

  return (
    <div className="productlist">
      <div className="productlistwrapper">
        {currentPageProducts.map((product: any) => (
          <Card key={product} {...product} />
        ))}
      </div>
      <Page
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
