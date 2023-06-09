import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBarMini({ isMenuOpen, categories }) {
  const [isCatOpen, setIsCatOpen] = useState(false);

  const handleCatToggle = () => {
    setIsCatOpen(!isCatOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <nav className="bg-white fixed z-50 h-screen w-[90%]">
          <ul className='py-16 flex flex-col  text-l'>
            <li key={1000} className="bg-gray-200 py-2 px-8"><Link to="/">Home</Link></li>
            <li key={2000} className="py-2 px-8" id='cat'><Link to="/catalog">Catalog</Link></li>
            <li key={3000} className="bg-gray-200 py-2 px-8">
              <span onClick={handleCatToggle}>Categories {"->"}</span>
            </li>
            <li key={4000} className="py-2 px-8"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}

      {isMenuOpen && isCatOpen && (
        <nav className="px-8 bg-white fixed z-50 h-screen w-[90%]">
          <span className='block py-6 text-sm text-red-400' onClick={handleCatToggle}>{"<-"} Categories</span>
          <ul className='flex flex-col gap-4 text-xl'>
            {categories.map(cat => (
              <li key={cat._id}>
                <Link to={`/category/${cat._id}`}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBarMini;












// --------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react'


// function NavBarMini({isMenuOpen}) {
//   const [categories, setCategories] = useState([]);

//   const [isCatOpen, setIsCatOpen] = useState();

//   const handleCatToggle = () => {
//     setIsCatOpen(!isCatOpen);
//   };

//   useEffect(() => {
//     fetch('https://api.storerestapi.com/categories')
//       .then(response => response.json())
//       .then(data => {
//         setCategories(data.data || [])
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     < >
//       {!isCatOpen && isMenuOpen 
//       ? (<nav className="bg-white fixed z-50 h-screen w-[90%]">
//         <ul className='py-16 flex flex-col  text-l'>
//           <li className="bg-gray-200 py-2 px-8">Home</li>
//           <li className="py-2 px-8">Catalog</li>
//           <li className="bg-gray-200 py-2 px-8">
//             <span onClick={handleCatToggle} >Categories {"->"}</span>
//           </li>
//           <li className="py-2 px-8">Contact</li>
//         </ul>
//       </nav>) 
//       : (<nav className=''></nav>)}

//       {isCatOpen && isMenuOpen 
//       ? (<nav className="bg-white fixed z-50 h-screen w-[90%]">
//         <span onClick={handleCatToggle} >{"<-"} Categories</span>
//           <ul className=''>
//             {categories.map(cat => {
//               <li key={cat._id}>{cat.name}</li>
//             })}
//           </ul>
//       </nav>)
//       : (<div></div>)}
//     </>
//   )
// }

// export default NavBarMini

// --------------------------------------------------------------------------------