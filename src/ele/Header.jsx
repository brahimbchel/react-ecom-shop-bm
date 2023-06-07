import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import NavBarMini from './NavBarMini';
import NavBarBig from './NavBarBig';
import CartOfProducts from './CartOfProducts';

function Header({setCartItems, cartItems}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetch('https://api.storerestapi.com/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.data || []);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <header>
    <div className='flex justify-between px-4 py-6 items-center border-b border-b-black
      md:mx-8 md:border-none
      '>
      {<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars } onClick={handleMenuToggle} className='md:hidden'/>}
      <Logo className=""/>
      <NavBarBig categories={categories}/>
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl'/>
        {/* <FontAwesomeIcon icon={faCartShopping} onClick={handleCartToggle} className='text-2xl' /> */}
        {!isCartOpen 
        ? (<FontAwesomeIcon icon={faCartShopping} onClick={handleCartToggle} className='text-2xl' />) 
        : (<button className="">
          <FontAwesomeIcon icon={faCartShopping} onClick={handleCartToggle} className='text-2xl' />
          <CartOfProducts cartItems={cartItems} setCartItems={setCartItems}/>
        </button>
        )}
      </div>
    </div>
    <NavBarMini isMenuOpen={isMenuOpen} categories={categories} className="md:hidden"/>
  </header>
  )
}

export default Header