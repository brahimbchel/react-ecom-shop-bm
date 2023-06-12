import React from 'react';
import AddProductForm from '../ele/AddProductForm';

function Admin({categories}) {

  return (
    <main className='mx-4 md:mx-8'>
      <AddProductForm categories={categories} />
    </main>
  )
}

export default Admin