import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Perform your desired action with the collected email (e.g., send it to a backend server)
    console.log('Submitted email:', email);

    // Reset the email input field
    setEmail('');
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  return (
    <footer className='py-8'>
      <div className="py-4 px-4 border-solid border-y-[0.5px] border-x-0 border-red-500 
      flex flex-col justify-center items-center">
        Subscribe To Our Newsletter:
        <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="p-2 border border-gray-300 rounded mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </form>
      </div>
      <div className=" px-4">
        <div className="flex justify-center items-center gap-2 py-2 text-xl">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>
      </div>
      <div className=" px-4 flex flex-col gap-2 items-center justify-center text-xs">
        <div className="">pyments methods</div>
        <div className="">website.com made with LOVE by bm & yf</div>
        <div className="">&copy; {currentYear} All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer