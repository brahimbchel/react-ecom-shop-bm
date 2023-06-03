import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';


const ProductHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.storerestapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.data || [])
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='px-4 py-4 md:px-8'>
    <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {products.slice(0, 8).map(product => (
        <li key={product._id}>
          <ProductCart product={product} />
        </li>
      ))}
    </ul>
    <button className='bg-black text-white px-8 py-3 mt-8 mx-auto flex'>View All</button>
  </div>
  )
}

export default ProductHome