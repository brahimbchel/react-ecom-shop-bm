import React from 'react'
import { Link } from 'react-router-dom'


const WelcomHome = () => {
  return (
    <div className='px-4 bg-red-700 text-white h-[250px] flex flex-col justify-center items-center gap-4'>
      <div className="">Browser Our Latest Products</div>
        <Link to="/catalog">
          <button className='border-solid border-2 border-white px-6 py-3'>
            Shop All
          </button>
        </Link>
    </div>
  )
}

export default WelcomHome