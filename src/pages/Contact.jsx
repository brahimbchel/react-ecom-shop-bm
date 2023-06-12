import React, { useState } from 'react'


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to a server
    console.log('Submitted:', { name, email, comment });
    // Reset form fields
    setName('');
    setEmail('');
    setNumber('');
    setComment('');
  };

  return (
    <main className='px-4 pt-8 md:px-32 lg:px-64'>
      <h2 className="text-3xl pb-16">Contact</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 pb-32 md:pb-64 lg:pb-96'>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className='w-full'>
            <label className='sr-only' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className='p-3 w-full border border-black'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <label htmlFor="email" className='sr-only'>Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className='p-3 w-full border border-black'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className=''>
          <label htmlFor="email" className='sr-only'>Phone number:</label>
          <input
            type="number"
            id="number"
            placeholder="Phone number"
            className='p-3 w-full border border-black'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label className='sr-only' htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            placeholder="Comment"
            className='p-3 w-full border border-black'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="flex md:justify-center justify-start">
        <button type="submit" className='bg-black text-white px-8 py-3'>Submit</button>
        </div>
      </form>
    </main>
  )
}

export default Contact