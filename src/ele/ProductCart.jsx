import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'


const ProductCart = ({product}) => {
  return (
    <div>
      <img src='./product-1.jpg'/>
      <div className="">{product.title.slice(0, 20)}....</div>
      <div className="flex justify-between items-center">
        <div className="">From ${product.price} USD</div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
    </div>
  )
}

export default ProductCart