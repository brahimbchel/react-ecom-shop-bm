import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' ||  number.trim() === '' || password.trim() === '' || password !== passwordRepeat) {
      setError('Please fill in all fields and make sure the passwords match.');
      return;
    }

    // Reset form fields and error state
    setName('');
    setEmail('');
    setNumber('');
    setPassword('');
    setPasswordRepeat('');
    setError('');

    // sending data to a server
    // console.log('Submitted:', { name, email,number, password, passwordRepeat });

    fetch('https://api.storerestapi.com/auth/register',
      {
          method: 'POST',
          body: JSON.stringify({
              name: name,
              email: email,
              number: number,
              password: password,
              password_repeat: passwordRepeat
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then(response => response.json())
      .then(json => console.log(json))
  };

  return (
    <main className='px-4 pt-8 mx-auto max-w-sm'>
      <h2 className="text-3xl pb-8 flex justify-center items-center">Sign In</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center'>
        <div className="">
          <label htmlFor='name' className='sr-only'>Name:</label>
          <input
            id='name'
            type='text'
            placeholder="Name"
            className='p-3 w-full border border-black'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor='email' className='sr-only'>Email:</label>
          <input
            id='email'
            type='email'
            placeholder="Email"
            className='p-3 w-full border border-black'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor='number' className='sr-only'>number:</label>
          <input
            id='number'
            type='number'
            placeholder="Number"
            className='p-3 w-full border border-black'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor='password' className='sr-only'>Password:</label>
          <input
            id='password'
            type='password'
            placeholder="Password"
            className='p-3 w-full border border-black'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="">
          <label htmlFor='password_repeat' className='sr-only'>Repeat Password:</label>
          <input
            id='password_repeat'
            type='password'
            placeholder="Repeat Password"
            className='p-3 w-full border border-black'
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button type='submit' className='bg-black text-white px-8 py-3'>Done</button>
      </form>
      <div className='text-blue-800 mt-4'>
        <Link to="/log-in" >already have an account</Link>
      </div>
    </main>
  );
};

export default SignIn;
