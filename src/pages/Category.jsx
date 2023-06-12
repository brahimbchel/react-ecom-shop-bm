import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Category({categories, products}) {
  const { id } = useParams();
  const [category, setCategory] = useState("")
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    let ctgr = categories.find((ctgr) => ctgr._id === id )
    if(ctgr){
      setCategory(ctgr)
      const categoryProductIds = ctgr.products;
      const categoryProductsData = products.filter((product) =>
        categoryProductIds.includes(product._id)
      );
      setCategoryProducts(categoryProductsData);
    }
  }, [categories, products, id])


  if (!category) {
    return <div>Loading...</div>; // Handle the case when category is not yet set
  }

  return (
    <div className='p-4 md:mx-8'>
      <h2 className="text-3xl pb-16">{category.name}</h2>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSliders} />
          <span>Filter and Sort</span>
        </div>
        <div className="">{categoryProducts.length} Products</div>
      </div>

      <ul className='grid gap-4 grid-cols-2 pt-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        {categoryProducts.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
            <div>
              <img src='./../product-1.jpg'/>
              <div className="">{product.title.slice(0, 20)}....</div>
            </div>
            </Link>
            <div className="flex justify-between items-center">
              <div className="">From ${product.price} USD</div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category