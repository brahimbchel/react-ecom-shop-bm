import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavBarBig = ({categories}) => {
  const [isCatOpen, setIsCatOpen] = useState(false);

  const handleCatToggle = () => {
    setIsCatOpen(!isCatOpen);
  };

  return (
    <nav className='mdmax:hidden'>
      <div className="flex gap-6">
        <div className="">Home</div>
        <div className="">Catalog</div>
        {!isCatOpen 
          ? (<div className="" onClick={handleCatToggle}>
            <span className='pr-2'>Categories</span> 
            <FontAwesomeIcon icon={faChevronDown} />
          </div>) 
          : (<div className='' onClick={handleCatToggle}>
            <span className='pr-2 pb-2'>Categories</span> 
            <FontAwesomeIcon icon={faChevronUp} />
            <ul className="absolute z-10 flex flex-col gap-4 bg-white p-8 border rounded shadow-lg">
              {categories.map((cat) => (
                <li key={cat._id} className='text-xl'>{cat.name}</li>
              ))}
            </ul>
          </div>)
        }
        <div className="">Contact</div>
      </div>
    </nav>
  )
}

export default NavBarBig