// import React, {useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

// function AdminSideBar() {
//   const [isProductOpen, setIsProductOpen] = useState(false)
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
//   const [isUsersOpen, setIsUsersOpen] = useState(false)

//   const handleProductSection =() => {
//     return setIsProductOpen(!isProductOpen)
//   }
//   const handleCategoriesSection =() => {
//     return setIsCategoriesOpen(!isCategoriesOpen)
//   }
//   const handleUsersSection =() => {
//     return setIsUsersOpen(!isUsersOpen)
//   }

//   return (
//     <main className='bg-red-900 h-screen w-60 hidden text-gray-300 p-4 
//     lg:flex lg:flex-col lg:gap-4 rounded-md'>
//       <div className="pb-4">Application</div>
//       <div className="flex items-center gap-2">
//         <FontAwesomeIcon icon={faCircle} />
//         <div className="">Dashboard</div>
//       </div>

//       <ul className="flex flex-col gap-4">
//         <li className="">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <FontAwesomeIcon icon={faCircle} />
//             <div className="">Product</div>
//           </div>
//           <FontAwesomeIcon icon={isProductOpen ? faAngleUp : faAngleDown} onClick={handleProductSection}/>
//         </div>
//         {isProductOpen && 
//         <ul className="px-10 flex flex-col gap-2 pt-2">
//         <li className="">
//           Product List
//         </li>
//         <li className="">
//           Add Product
//         </li>
//       </ul>
//         }
//         </li>

//         <li className="">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <FontAwesomeIcon icon={faCircle} />
//             <div className="">Categories</div>
//           </div>
//           <FontAwesomeIcon icon={isCategoriesOpen ? faAngleUp : faAngleDown} onClick={handleCategoriesSection}/>
//         </div>
//         {isCategoriesOpen && 
//         <ul className="px-10 flex flex-col gap-2 pt-2">
//         <li className="">
//           Categories List
//         </li>
//         <li className="">
//           Add Categories
//         </li>
//       </ul>
//         }
//         </li>

//         <li className="">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <FontAwesomeIcon icon={faCircle} />
//             <div className="">Users</div>
//           </div>
//           <FontAwesomeIcon icon={isUsersOpen ? faAngleUp : faAngleDown} onClick={handleUsersSection}/>
//         </div>
//         {isUsersOpen && 
//         <ul className="px-10 flex flex-col gap-2 pt-2">
//         <li className="">
//           Users List
//         </li>
//         <li className="">
//           Add Users
//         </li>
//       </ul>
//         }
//         </li>
//       </ul>
//       <div className="flex items-center gap-2">
//         <FontAwesomeIcon icon={faCircle} />
//         <div className="">Media</div>
//       </div>
//     </main>
//   )
// }

// export default AdminSideBar

import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isUsersOpen, setIsUsersOpen] = useState(false)

  const handleProductSection =() => {
    return setIsProductOpen(!isProductOpen)
  }
  const handleCategoriesSection =() => {
    return setIsCategoriesOpen(!isCategoriesOpen)
  }
  const handleUsersSection =() => {
    return setIsUsersOpen(!isUsersOpen)
  }

  return (
    <main className='bg-red-900 h-screen w-60 hidden text-gray-300 p-4 
    lg:flex lg:flex-col lg:gap-4 rounded-md'>
      <div className="pb-4">Application</div>
      <Link to="/admin">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircle} />
          <div className="">Dashboard</div>
        </div>
      </Link>

      <ul className="flex flex-col gap-4">
        <li className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircle} />
            <div className="">Product</div>
          </div>
          <FontAwesomeIcon icon={isProductOpen ? faAngleUp : faAngleDown} onClick={handleProductSection}/>
        </div>
        {isProductOpen && 
        <ul className="px-10 flex flex-col gap-2 pt-2">
        <Link to="products-list">
          <li className="">
            Product List
          </li>
        </Link>
        <Link to="add-product">
          <li className="">
            Add Product
          </li>
        </Link>
      </ul>
        }
        </li>

        <li className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircle} />
            <div className="">Categories</div>
          </div>
          <FontAwesomeIcon icon={isCategoriesOpen ? faAngleUp : faAngleDown} onClick={handleCategoriesSection}/>
        </div>
        {isCategoriesOpen && 
        <ul className="px-10 flex flex-col gap-2 pt-2">
        <li className="">
          Categories List
        </li>
        <li className="">
          Add Categories
        </li>
      </ul>
        }
        </li>

        <li className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircle} />
            <div className="">Users</div>
          </div>
          <FontAwesomeIcon icon={isUsersOpen ? faAngleUp : faAngleDown} onClick={handleUsersSection}/>
        </div>
        {isUsersOpen && 
        <ul className="px-10 flex flex-col gap-2 pt-2">
        <li className="">
          Users List
        </li>
        <li className="">
          Add Users
        </li>
      </ul>
        }
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faCircle} />
        <div className="">Media</div>
      </div>
    </main>
  )
}

export default AdminSideBar