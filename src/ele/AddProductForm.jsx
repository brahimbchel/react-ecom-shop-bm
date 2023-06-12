import React, { useState } from 'react';

const AddProductForm = ({categories}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState("");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Process the uploaded image file as needed
    // console.log(file);
    setImage(file)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form input
    if (name.trim() === '' || price.trim() === '' || category.trim() === '') {
      alert('Please enter a name and price for the product.');
      return;
    }

    // Create a new product object
    const newProduct = {
      title: name,
      price: parseFloat(price),
      description: description,
      category: category
    };

    // Send the product data to the API endpoint
    fetch('https://api.storerestapi.com/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });

    // Clear the form fields
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className='border border-blue-900 py-4 mx-4 md:mx-8 w-fit'>
      <h2 className='flex justify-center'>Add Product</h2>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="name" className='sr-only'>Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className='px-2 w-full py-2 focus:outline-0'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="price" className='sr-only'>Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          className='px-2 w-full py-2 focus:outline-0'
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="category" className='sr-only'>Category:</label>
        <select id="category" className='px-2 w-full py-2 focus:outline-0' placeholder='Select a category'
          value={category} onChange={handleCategoryChange}>
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
          placeholder="Image"
          className='px-2 w-full py-2 focus:outline-0'
          // value={image}  // The value attribute should not be used
          onChange={handleImageUpload}
        />
      </div>
      
      <div className='my-2 mx-4 border px-2'>
        <label htmlFor="description" className='sr-only'>Description:</label>
        <textarea
          type="text"
          id="description"
          placeholder="description"
          className='px-2 w-full focus:outline-0'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className='bg-blue-200 px-4 py-1'>Add</button>
      </div>
    </form>
    
  );
};

export default AddProductForm;
