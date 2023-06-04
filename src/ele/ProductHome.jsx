import React from 'react';
import ProductCart from './ProductCart';

const ProductHome = ({products}) => {
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