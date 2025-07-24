'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavorite, MdLogin } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white sticky top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center justify-between duration-1000 xs:mx-10 md:mx-20 lg:h-[120px] md:h-[115px] sm:h-[110px] xs:h-[105px] lg:gap-[100px] md:gap-[75px] sm:gap-[50px] xs:gap-[25px]">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/dirjaslogo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-cover"
            priority
          />
        </Link>

        {/* Hamburger Menu */}
        <button onClick={handleNav} className="inline-flex lg:hidden">
          <FiMenu className="xs:text-4xl md:text-5xl text-black hover:text-amber-400 font-bold" />
        </button>

        {/* Sidebar Mobile */}
        <div
          className={`fixed top-0 ${
            menuOpen ? 'right-0' : '-right-[300px]'
          } xs:w-[150px] sm:w-[200px] md:w-[250px] h-screen bg-white ease-in duration-500 shadow-2xl lg:hidden xs:pt-5 sm:pt-8 md:pt-10 xs:px-2 sm:px-5 md:px-10`}
        >
          <div className="flex justify-end">
            <button onClick={handleNav} aria-label="Close menu">
              <AiOutlineClose className="hover:text-red-500 xs:text-[25px]" />
            </button>
          </div>
          <ul className="xs:mt-5 sm:mt-8 md:mt-10 space-y-5">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${
                    item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                  }`}
                  className="block text-[#555486] hover:text-amber-400 text-md font-semibold text-center px-5"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="mt-4 border-[3px] border-amber-400" />
          <ul className="mt-5 space-y-5">
            <li>
              <Link href="/login" className="flex items-center px-5">
                <MdLogin className="text-[30px] text-[#555486]" />
                <span className="px-3 font-semibold text-[#555486] hover:text-amber-400">
                  Login
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shop/like" className="flex items-center px-5">
                <MdFavorite className="text-[30px] text-red-600" />
                <span className="relative px-3 font-semibold text-[#555486] hover:text-amber-400">
                  Like
                  <span className="absolute -top-3 -left-3 bg-red-200 rounded-full text-[12px] px-[6px]">
                    3
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shop/cart" className="flex items-center px-5">
                <AiOutlineShoppingCart className="text-[30px] text-[#555486]" />
                <span className="relative px-3 font-semibold text-[#555486] hover:text-amber-400">
                  Cart
                  <span className="absolute -top-3 -left-3 bg-red-200 rounded-full text-[12px] px-[6px]">
                    3
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex justify-center flex-1">
            <ul className="flex gap-10 text-[#555486] text-[20px]">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${
                      item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                    }`}
                    className="hover:text-amber-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="py-2 px-3 hover:bg-gray-200 hover:text-amber-400 rounded-full text-[#555486]"
            >
              Login
            </Link>
            <Link
              href="/shop/like"
              className="relative flex items-center text-red-600 hover:text-amber-400"
            >
              <MdFavorite className="text-[30px]" />
              <span className="absolute -top-2 -right-2 bg-red-200 rounded-full text-[12px] px-[6px]">
                3
              </span>
            </Link>
            <Link
              href="/shop/cart"
              className="relative flex items-center text-[#555486] hover:text-amber-400"
            >
              <AiOutlineShoppingCart className="text-[30px]" />
              <span className="absolute -top-2 -right-2 bg-red-200 rounded-full text-[12px] px-[6px]">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
