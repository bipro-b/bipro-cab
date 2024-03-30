'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: ''
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
    // Perform API call to log in user using formData
    try {
      const response = await fetch('http://localhost:8080/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle response
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
        <input type="password" name="userPassword" placeholder="Password" value={formData.userPassword} onChange={handleChange} />
        <button type="submit">Log In</button>
      </form>
      <div>
      <Link href="/signup">
        Sign Up
      </Link>
      </div>
    </div>
  );
}
