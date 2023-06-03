import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import NavBarMini from './NavBarMini';
import NavBarBig from './NavBarBig';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
      </div>
    </div>
    <NavBarMini isMenuOpen={isMenuOpen} categories={categories} className="md:hidden"/>
  </header>
  )
}

export default Header