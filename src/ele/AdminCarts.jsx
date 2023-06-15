import React from 'react'


function AdminCarts({users, categories,products}) {
  return (
    <main className=' grid grid-cols-2  md:grid-cols-4 gap-4'>
      <div className="text-white bg-red-500 p-4 rounded-md bg-user">
        <span>Users</span>
        <div className="text-2xl mb-4">{users.length}</div>
        <div className="">
          <span className='bg-green-400 px-[3px] py-[2px] mr-2  rounded-md'>+11% </span>
          From previous period
        </div>
      </div>

      <div className="text-white bg-red-500 p-4 rounded-md bg-products">
        <span>Products</span>
        <div className="text-2xl mb-4">{products.length}</div>
        <div className="">
          <span className='bg-green-400 px-[3px] py-[2px] mr-2  rounded-md'>+11% </span>
          From previous period
        </div>
      </div>

      <div className="text-white bg-red-500 p-4 rounded-md bg-categories">
        <span>Categories</span>
        <div className="text-2xl mb-4">{categories.length}</div>
        <div className="">
          <span className='bg-green-400 px-[3px] py-[2px] mr-2  rounded-md'>+11% </span>
          From previous period
        </div>
      </div>
      
      <div className="text-white bg-red-500 p-4 rounded-md bg-order">
        <span>Orders</span>
        <div className="text-2xl mb-4">0</div>
        <div className="">
          <span className='bg-green-400 px-[3px] py-[2px] mr-2  rounded-md'>+11% </span>
          From previous period
        </div>
      </div>
    </main>
  )
}

export default AdminCarts