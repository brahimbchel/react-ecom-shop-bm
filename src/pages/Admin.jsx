import React , { useState, useEffect } from 'react';
import AddProductForm from '../ele/AddProductForm';
import AdminCarts from '../ele/AdminCarts';
import AdminSideBar from '../ele/AdminSideBar';

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
      {/* <AddProductForm categories={categories} /> */}
      <AdminSideBar />
      <AdminCarts users={users} categories={categories} products={products} />
    </main>
  )
}

export default Admin