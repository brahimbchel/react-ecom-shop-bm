import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartOfProducts = ({ cartItems, setCartItems }) => {

  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== itemId)
    );
  };

  return (
    <div className='absolute z-10 bg-red-300 p-4 rounded-md right-5'>
      <h2 className='text-lg font-semibold mb-4'>Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id} className='flex items-center justify-between mb-4'>
          <div className='flex items-center'>
            <div className='mr-2'>
              <img src='../product-1.jpg' className='w-10 h-10 rounded-full' alt='Product' />
            </div>
            <div className=''>
              <div className='text-sm'>{item.title.slice(0, 8)}</div>
              <div className='text-xs'>
                {item.price} * {item.quantity}
              </div>
            </div>
          </div>
          <button
            className='text-red-500 hover:text-red-700 focus:outline-none'
            onClick={() => handleRemoveItem(item._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md'>
        Checkout
      </button>
    </div>
  );
};

export default CartOfProducts;
