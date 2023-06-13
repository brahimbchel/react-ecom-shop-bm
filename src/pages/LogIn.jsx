import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if ( email.trim() === '' || password.trim() === '' ) {
      setError('Please fill in all fields and make sure the passwords match.');
      return;
    }

    // Reset form fields and error state
    setEmail('');
    setPassword('');

    fetch('https://api.storerestapi.com/auth/login',
      {
          method: 'POST',
          body: JSON.stringify({
              email: email,
              password: password,
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
      <h2 className="text-3xl pb-4 flex justify-center items-center">log In</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center'>
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

        {error && <p className="text-red-500">{error}</p>}

        <button type='submit' className='bg-black text-white px-8 py-3'>Done</button>
      </form>

      <div className='text-blue-800 mt-4'>
        <Link to="/sign-in" >i don't have an account</Link>
      </div>      
    </main>
  )
}

export default LogIn