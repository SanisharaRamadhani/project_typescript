'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implementasi pengiriman reset link
    console.log('Request password reset for:', email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-6">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="mb-8 text-center text-4xl font-extrabold">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Enter your email to receive a reset link
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 disabled:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            disabled={!email}
            className="w-full flex justify-center py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-amber-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition disabled:opacity-50"
          >
            Request Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/login">
            <a className="text-sm text-amber-600 hover:underline">
              Back to Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
