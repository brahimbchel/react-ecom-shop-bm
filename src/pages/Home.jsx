import React from 'react'
import ProductHome from '../ele/ProductHome'
import WelcomHome from '../ele/WelcomHome'


function Home() {
  return (
    <div>
      <WelcomHome />
      <h1 className="px-4 pt-4 text-xl">Featured Products</h1>
      <ProductHome />
    </div>
  )
}

export default Home