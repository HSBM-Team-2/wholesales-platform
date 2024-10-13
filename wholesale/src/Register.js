import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message
    setSuccessMessage(null); // Reset success message

    // Register the user with Supabase's auth module
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { user_type_id: userType }, // Custom user metadata
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage('Registration successful! You can now log in.');
      console.log('User registered:', data);
      
      setEmail('');
      setPassword('');
      setUserType('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h2>
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 mb-4 text-center">{successMessage}</p>
        )}
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select User Type</option>
            <option value="1">User</option>
            <option value="2">Transport</option>
            <option value="3">Wholesale</option>
          </select>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
