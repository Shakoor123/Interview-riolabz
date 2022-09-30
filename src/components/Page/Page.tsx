import React from "react";
import { isButtonElement } from "react-router-dom/dist/dom";
import "./Page.css";
type propValues = {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: any;
};
const Page = ({ totalPosts, postPerPage, setCurrentPage }: propValues) => {
  let pages = [];
  let i: number = 1;

  do {
    pages.push(i);
    totalPosts = totalPosts - postPerPage;
    i = i + 1;
  } while (totalPosts > 0);

  return (
    <div className="pages">
      <div className="pageWrapper">
        {pages.map((page, index) => (
          <button
            className="button"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
