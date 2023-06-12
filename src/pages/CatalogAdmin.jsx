import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import ProductCart from '../ele/ProductCart'
import { Link } from 'react-router-dom';

const CatalogAdmin = ({products}) => {
  return (
    <div className='p-4 md:mx-8'>
      <h2 className='text-3xl pb-16'>Products</h2>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSliders} />
          <span>Filter and Sort</span>
        </div>
        <div className="">{products.length} Products</div>
      </div>

      <ul className='grid gap-4 grid-cols-2 pt-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        {products.map((product) => (
          <li key={product._id}>
            {/* <ProductCart product={product} /> */}
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
    </div>
  )
}

export default CatalogAdmin