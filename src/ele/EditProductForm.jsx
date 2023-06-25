import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditProductForm = ({categories}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState("");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the product details based on the productId from the backend
    fetch(`https://api.storerestapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, [productId]);

  // Handle form submission and update the product details
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the update operation here
    // ...
  
    // After the update is complete, you can redirect the user back to the product list page
    navigate('/products-list');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='border border-blue-900 py-4 mx-4 md:mx-8'>
      <h2 className='flex justify-center'>Edit Product</h2>
      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="title" className='sr-only'>Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          className='px-2 w-full py-2 focus:outline-0'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="price" className='sr-only'>Price:</label>
        <input
          type="text"
          id="price"
          placeholder="price"
          className='px-2 w-full py-2 focus:outline-0'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="category" className='sr-only'>Category:</label>
        <select id="category" className='px-2 w-full py-2 focus:outline-0' placeholder='Select a category'
          value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
          {/* Add more category options as needed */}
        </select>
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="image" className='sr-only'>Image:</label>
        <input
          type="file"
          id="image"
          className='px-2 w-full py-2 focus:outline-0'
          // value={image}  // The value attribute should not be used
          onChange={(e) => {
            const file = e.target.files[0];
            // Process the uploaded image file as needed
            // console.log(file);
            setImage(file)
          }}
        />
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="description" className='sr-only'>Description:</label>
        <textarea
          type="text"
          id="description"
          placeholder="description"
          className='px-2 w-full py-2 focus:outline-0'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className='bg-blue-200 px-4 py-1 rounded'>Done</button>
      </div>
      </form>
    </div>
  );
};

export default EditProductForm;
