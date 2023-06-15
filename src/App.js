import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./ele/Footer";
import Header from "./ele/Header";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import ProductPost from "./ele/ProductPost";
import Admin from "./pages/Admin";
import CatalogAdmin from "./pages/CatalogAdmin";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data || []);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://api.storerestapi.com/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Router>
        <Header cartItems={cartItems} setCartItems={setCartItems} />

        <Routes>
          <Route path="/" element={<Home products={products} />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/catalog" element={<Catalog products={products} />} />
          <Route
            path="/catalog-admin"
            element={<CatalogAdmin products={products} />}
          />
          <Route
            path="/category/:id"
            element={<Category categories={categories} products={products} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/product/:id"
            element={
              <ProductPost
                products={products}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          ></Route>
        </Routes>

        <Footer categories={categories} />
      </Router>
    </>
  );
}

export default App;
