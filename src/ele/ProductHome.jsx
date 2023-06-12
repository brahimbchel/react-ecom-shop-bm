import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProductCart from './ProductCart';
import { Link } from 'react-router-dom';

const ProductHome = ({products}) => {
  return (
    <div className='px-4 py-4 md:px-8'>
    <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {products.slice(0, 8).map(product => (
        <li key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src='./product-1.jpg'/>
            <div className="">{product.title.slice(0, 20)}....</div>
            </Link>
            <div className="flex justify-between items-center">
              <div className="">From ${product.price} USD</div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </li>
      ))}
    </ul>
    <Link to="/catalog" >
      <button className='bg-black text-white px-8 py-3 mt-8 mx-auto flex'>
        View All
      </button>
    </Link>
  </div>
  )
}

export default ProductHome