import React , { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import AdminCarts from '../ele/AdminCarts';
import AdminSideBar from '../ele/AdminSideBar';
import AdminProductsListTable from '../ele/AdminProductsListTable';
import AdminAddProduct from '../ele/AdminAddProduct';

function Admin() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    fetch("https://api.storerestapi.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className='mx-4 my-4 md:mx-8 flex items-start gap-4'>
      <AdminSideBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<AdminCarts users={users} categories={categories} products={products} />} />
          <Route path="/products-list" element={<AdminProductsListTable products={products} />} />
          <Route path="/add-product" element={<AdminAddProduct categories={categories} />} />
        </Routes>
      </div>
    </main>
  )
}

export default Admin