import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addfilter } from "../../redux/filterSlice";
import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e: { target: { value: any } }) => {
    const value = e.target.value;
    dispatch(addfilter(value));
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
    </div>
  );
};

export default Filter;
