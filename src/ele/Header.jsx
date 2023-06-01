import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import NavBarMini from './NavBarMini';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='flex justify-between px-4 py-6 items-center border-b border-b-black'>
      {<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars } onClick={handleMenuToggle}/>}
      <Logo />
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl'/>
        <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
      </div>
    </div>
    <NavBarMini isMenuOpen={isMenuOpen} className="bg-blue-300"/>
  </header>
  )
}

export default Header