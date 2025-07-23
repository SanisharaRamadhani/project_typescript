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
    <>
      <div className=" bg-white sticky top-0 left-0 z-50 shadow-lg ">
        <div className="lg:h-[120px] md:h-[115px] sm:h-[110px] xs:h-[105px] flex items-center justify-between lg:gap-[100px] md:gap-[75px] sm:gap-[50px] xs:gap-[25px] duration-1000 xs:mx-10 md:mx-20">
          <div>
            <Link href="/">
              <Image
                src="/dirjaslogo.png"
                alt="logos"
                className="object-cover h-[100px] w-[100px]"
              />
            </Link>
          </div>
          <div onClick={handleNav} className="inline-flex lg:hidden">
            <FiMenu className="xs:text-4xl md:text-5xl text-black hover:text-amber-400 font-bold cursor-pointer" />
          </div>
          <div
            className={
              menuOpen
                ? 'fixed right-0 top-0 xs:w-[150px] sm:w-[200px] md:w-[250px] h-screen bg-white xs:pt-5 sm:pt-8 md:pt-10 xs:px-2 sm:px-5 md:px-10 ease-in duration-500 shadow-2xl lg:hidden'
                : 'fixed right-[-250px] top-0 h-screen :p-10 ease-in duration-500 lg:hidden'
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="cusrsor-pointer">
                <AiOutlineClose className="hover:text-red-500 cursor-pointer xs:text-[25px]" />
              </div>
            </div>
            <div>
              <ul className="xs:mt-5 sm:mt-8 md:mt-10">
                <Link href="/">
                  <li className="pb-5">
                    <p className="text-[#555486] hover:text-amber-400 px-5 text-center text-md font-semibold">
                      Home
                    </p>
                  </li>
                </Link>
                <Link href="/shop">
                  <li className="pb-5">
                    <p className="text-[#555486] hover:text-amber-400 px-5 text-center text-md font-semibold">
                      Shop
                    </p>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="pb-5">
                    <p className="text-[#555486] hover:text-amber-400 px-5 text-center text-md font-semibold">
                      About
                    </p>
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="pb-5">
                    <p className="text-[#555486] hover:text-amber-400 px-5 text-center text-md font-semibold">
                      Contact
                    </p>
                  </li>
                </Link>
              </ul>
              <hr className="pr-[20px] border-[3px] border-solid border-amber-400"></hr>
              <ul className="mt-5">
                <Link
                  href="/login"
                  className="px-5 flex flex-row items-center pb-5"
                >
                  <MdLogin className="text-[30px] text-[#555486]"></MdLogin>
                  <p className="px-3 font-semibold text-[#555486] hover:text-amber-400 ">
                    Login
                  </p>
                </Link>
                <Link
                  href="/shop/like"
                  className="px-5 flex flex-row items-center pb-5"
                >
                  <MdFavorite className="text-[30px] text-red-600"></MdFavorite>
                  <div className="flex flex-col justify-start">
                    <div className="bg-red-200 rounded-full text-[12px] px-[5px] -ml-[10px] -mt-[20px]">
                      3
                    </div>
                  </div>
                  <p className="px-3 font-semibold text-[#555486] hover:text-amber-400 ">
                    Like
                  </p>
                </Link>
                <Link
                  href="/shop/cart"
                  className="px-5 flex flex-row items-center pb-5"
                >
                  <AiOutlineShoppingCart className="text-[30px] text-[#555486] "></AiOutlineShoppingCart>
                  <div className="flex flex-col justify-start">
                    <div className="bg-red-200 rounded-full text-[12px] px-[5px] -ml-[10px] -mt-[20px]">
                      3
                    </div>
                  </div>
                  <p className="px-3 font-semibold text-[#555486] hover:text-amber-400">
                    Cart
                  </p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="hidden lg:inline-flex">
            <ul className="flex lg:gap-10 md:gap-7 sm:gap-5 lg:text-[20px] md:text-[15px] sm:text-[10px] xs:text-[8px] text-[#555486]">
              <Link href="/">
                {' '}
                <li className="cursor-pointer hover:text-amber-400">
                  Home
                </li>{' '}
              </Link>
              <Link
                href="/shop"
                className="cursor-pointer hover:text-amber-400"
              >
                <li>Shop</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer hover:text-amber-400 ">About</li>
              </Link>
              <Link href="/contact">
                {' '}
                <li className="cursor-pointe hover:text-amber-400">
                  Contact
                </li>{' '}
              </Link>
            </ul>
          </div>
          <div className="justify-center items-center gap-2 hidden lg:inline-flex">
            <div className="flex-initial">
              <div className="flex justify-end items-center relative">
                <ul className="flex items-center gap-2 lg:text-[20px] md:text-[15px] sm:text-[10px] xs:text-[8px]">
                  <Link
                    href="/login"
                    className="py-2 px-3 hover:bg-gray-200 hover:text-amber-400 rounded-full text-[#555486]"
                  >
                    <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                      Login
                    </div>
                  </Link>
                  <Link
                    href="/shop/like"
                    className="flex flex-row py-2 px-3 hover:bg-gray-200 hover:text-amber-400 rounded-full text-red-600"
                  >
                    <MdFavorite className="text-[30px]"></MdFavorite>
                    <div className="flex flex-col justify-start">
                      <div className="bg-red-200 rounded-full text-[12px] px-[5px] -ml-[10px] -mt-[5px]">
                        3
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/shop/cart"
                    className="flex flex-row py-2 px-3 hover:bg-gray-200 hover:text-amber-400 rounded-full text-[#555486]"
                  >
                    <AiOutlineShoppingCart className="text-[30px]"></AiOutlineShoppingCart>
                    <div className="flex flex-col justify-start">
                      <div className="bg-red-200 rounded-full text-[12px] px-[5px] -ml-[10px] -mt-[5px]">
                        3
                      </div>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
