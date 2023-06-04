import React from 'react'
import ProductHome from '../ele/ProductHome'
import WelcomHome from '../ele/WelcomHome'

function Home({products}) {
  return (
    <div>
      <WelcomHome />
      <h1 className="px-4 pt-4 md:px-8 text-xl">Featured Products</h1>
      <ProductHome products={products}/>
    </div>
  )
}

export default Home