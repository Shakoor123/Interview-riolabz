import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
