import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form id='form' className='text-center'   onSubmit={handleSubmit}>
      <div>      
        <label>Name</label><> </>
        <input
          type="text" 
          placeholder='user'
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        /><>   </><FaUserCircle />
      </div>
      <div>
      
        <label>Email</label><> </>
        <input
          type="email" 
          placeholder='user@gmail.com'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /><>  </> <MdEmail />
      </div>
      {/* <button type="submit">Add Contact</button> */}
      <Button type="submit" variant="primary" size="lg">Add Contact</Button>
    </form>
  );
};

export default ContactForm;
