'use client';

import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegis = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/regis', {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Sign up Successfully');
        router.push('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 mb-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              placeholder="First Name"
              type="text"
              name="firstName"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              placeholder="Last Name"
              type="text"
              name="lastName"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
              placeholder="+62"
              type="text"
              name="phoneNumber"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="@mail.com"
              type="email"
              name="email"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="********"
              type="password"
              name="password"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            />
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleRegis}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold capitalize text-white hover:text-black hover:bg-amber-400 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 transition"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="flex flex-row justify-center gap-1">
              Have an account?
              <Link href="/login">
                <span className="underline cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
