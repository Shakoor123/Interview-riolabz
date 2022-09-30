import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addfilter } from "../../redux/filterSlice";
import { useNavigate } from "react-router-dom";
import "./Filter.css";

const Filter = ({ products }: any) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFilter = (e: { target: { value: any } }) => {
    const value = e.target.value;
    dispatch(addfilter(value));
  };
  const handleSearch = () => {
    products.filter((item: any) => {
      if (item.title.toLowerCase() === searchText.toLocaleLowerCase()) {
        navigate(`/products/${item.id}`);
      }
    });
  };

  const onSearch = (searchTerm: string) => {
    setSearchText(searchTerm);
  };
  return (
    <div className="filter">
      <h3 className="filterTitle"></h3>
      <select
        name="categories"
        className="categories"
        id=""
        onChange={handleFilter}
      >
        <option value="" selected>
          All
        </option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="search"
        className="search"
      />{" "}
      <button className="searchbutton" onClick={handleSearch}>
        Search
      </button>
      <div className="dropDown">
        {products
          .filter((item: any) => {
            const searchTerm = searchText.toLowerCase();
            const fullName = item.title.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((productOne: any) => (
            <div
              className="dropdown-row"
              onClick={() => onSearch(productOne.title)}
            >
              {productOne.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
