import React from 'react'


const ProductCart = ({product}) => {
  return (
    <div>
      <img src='./product-1.jpg'/>
      <div className="">{product.title.slice(0, 20)}....</div>
      <div className="">From ${product.price} USD</div>
    </div>
  )
}

export default ProductCart