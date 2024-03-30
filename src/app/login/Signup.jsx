'use client'
import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userRole: '',
    mobileNumber: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Failed to log in');
      }
      // Handle successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };
  
  

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} />
        <input type="email" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
        <input type="password" name="userPassword" placeholder="Password" value={formData.userPassword} onChange={handleChange} />
        <input type="text" name="userRole" placeholder="Role" value={formData.userRole} onChange={handleChange} />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
