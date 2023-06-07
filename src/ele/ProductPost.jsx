import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function ProductPost({products, setCartItems, cartItems}) {
  const { id } = useParams();
  const [product, setProduct] = useState('')
  const [counter, setCounter] = useState(0)
  // const [cartItems, setCartItems] = useState([]);


  const handleCounterPlus = () => {
    setCounter((counter) => counter + 1);
  };

  const handleCounterMinus = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  // const handleAddToCart = () => {
  //   // setCartItems((prevCartItems) => [
  //   //   ...prevCartItems,
  //   //   { ...product, quantity: counter },
  //   // ]);
  //   if(counter > 0){
  //     setCartItems((prevCartItems) => [
  //       ...prevCartItems,
  //       { ...product, quantity: counter },
  //     ]);
  //   }
  // };

  const handleAddToCart = () => {
    if (counter > 0) {
      const existingItem = cartItems.find((item) => item._id === product._id);
      if (existingItem) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item._id === existingItem._id
              ? { ...item, quantity: item.quantity + counter }
              : item
          )
        );
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...product, quantity: counter },
        ]);
      }
      setCounter(0); // Reset the counter after adding the item to the cart
    }
  };
  
  

  useEffect(() => {
    let prdct = products.find((p) => p._id === id);
    if (prdct) {
      setProduct(prdct);
    }
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>; // or any other placeholder while the product is being loaded
  }

  return (
    <div className='flex flex-col justify-between gap-4 md:flex-row md:mx-8 md:my-16'>
      {/* images */}
      <div className="flex flex-col gap-4">
        {/* big image */}
        <div className="">
          <img src='/../product-1.jpg' className='rounded-xl'/>
        </div>

        {/* small imgs */}
        <div className="flex flex-row gap-4 mx-3 w-[20%]">
        <img src='/../product-1.jpg'  className='rounded-xl' />
        <img src='/../product-1.jpg'  className='rounded-xl' />
        <img src='/../product-1.jpg'  className='rounded-xl' />
        <img src='/../product-1.jpg'  className='rounded-xl' />
        </div>
      </div>

      {/* informations */}
      <div className="mx-4 my-4">
        <div className="text-orange-500">Category</div>
        <h2 className="text-3xl">{product.title}</h2>
        <div className="text-gray-400">{product.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat officiis, voluptatem reiciendis eligendi ut illo quos repudiandae accusantium odio minus cumque tenetur dicta omnis nesciunt? Iste, ex. Eius, ipsa laboriosam?</div>
        <div className="text-3xl my-4">${product.price}.00</div>

        {/* comande section */}
        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="flex justify-between gap-4 items-center px-8 py-2 bg-gray-200 rounded-xl">
            <span className='text-orange-500 text-4xl' onClick={handleCounterMinus}>-</span>
            <span className='text-2xl'>{counter}</span>
            <span className='text-orange-500 text-4xl' onClick={handleCounterPlus}>+</span>
          </div>

          <button type='submit' onClick={handleAddToCart} className="flex gap-4 justify-center items-center px-8 py-4 bg-orange-500 rounded-xl text-white">
            <FontAwesomeIcon icon={faCartShopping} className='text-xl' />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPost