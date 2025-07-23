'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Hero = () => {
  const slides = [
    { url: '/ceramics1.avif' },
    { url: '/ceramics2.avif' },
    { url: '/ceramics3.avif' },
    { url: '/ceramics4.avif' },
    { url: '/ceramics5.avif' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   const goToSlide = () => {
  //     setCurrentIndex(slideIndex);
  //   };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex xs:h-[250px] xs:w-[360px] sm:h-[350px] sm:w-[460px] md:h-[450px] md:w-[550px] lg:h-[500px] lg:w-[600px] xs:mx-[10px] sm:mx-[30px] md:mx-[50px] lg:mx-[100px] xs:my-[20px] sm:my-[30px] md:my-[40px] lg:my-[45px] shadow-2xl rounded-2xl">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className=" xs:h-[250px] xs:w-[360px] sm:h-[350px] sm:w-[460px] md:h-[450px] md:w-[550px] lg:w-full lg:h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <div className="mt-[30%] flex flex-col items-center">
              <div className="flex items-center justify-around xs:text-sm sm:text-xl md:text-2xl lg:text-3xl text-center text-amber-900 font-bold bg-white/50">
                <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
                  {' '}
                  <BsChevronCompactLeft onClick={prevSlide} className="" />{' '}
                </div>
                <h1>
                  Now it's easier to get your interior or exterior ceramics
                </h1>
                <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} className="" />
                </div>
              </div>
              <Link href="/shop">
                <button className="bg-amber-900 xs:mt-2 sm:mt-4 md:mt-4 lg:mt-5 xs:text-sm sm:text-md md:text-lg lg:text-xl text-center font-semibold text-white rounded-lg xs:h-[25px] sm:h-[30px] md:h-[40px] lg:h-[50px] xs:w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px]">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
