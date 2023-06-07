import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBarBig = ({categories}) => {
  const [isCatOpen, setIsCatOpen] = useState(false);

  const handleCatToggle = () => {
    setIsCatOpen(!isCatOpen);
  };

  return (
    <nav className='mdmax:hidden'>
      <ul className="flex gap-6">
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/catalog">Catalog</Link></li>

        {!isCatOpen 
          ? (<li className="" id='cat' onClick={handleCatToggle}>
            <span className='pr-2'>Categories</span> 
            <FontAwesomeIcon icon={faChevronDown} />
          </li>) 
          : (<li className='' onClick={handleCatToggle}>
            <span className='pr-2 pb-2'>Categories</span> 
            <FontAwesomeIcon icon={faChevronUp} />
            <ul className="absolute z-10 flex flex-col gap-4 bg-white p-8 border rounded shadow-lg">
              {categories.map((cat) => (
                <li key={cat._id} className='text-xl'>
                  <Link to={`/category/${cat._id}`}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>)
        }

        <li className=""><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBarBig