'use client';

import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Products = () => {
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
      <div className="xs:mx-10 lg:mx-20 xs:mb-5 lg:mb-10 mt-10 flex xs:flex-col lg:flex-row xs:justify-center lg:justify-between">
        <div className="justify-center z-10 lg:hidden inline-flex">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="xs:min-w-[300px] sm:min-w-[350px] md:min-w-[400px] xs:min-h-[300px] sm:min-h-[350px] md:min-h-[400px] rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </div>
        <div className="justify-center -mt-[50px] lg:hidden inline-flex">
          <div className="border-2 rounded-[50%] py-[50px] xs:px-[180px] sm:px-[210px] md:px-[250px] -z-10"></div>
        </div>
        <div className="flex-row justify-between lg:hidden inline-flex mt-5">
          <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
            {' '}
            <BsChevronCompactLeft onClick={prevSlide} className="" />{' '}
          </div>
          <div className="flex flex-row justify-around ">
            <div className="text-xl ml-5">S</div>
            <div className="text-xl ml-5">S</div>
            <div className="text-xl mx-5">S</div>
            <div className="text-xl mr-5">S</div>
            <div className="text-xl mr-5">S</div>
          </div>
          <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} className="" />
          </div>
        </div>
        <div className="flex flex-col xs:max-w-[930px] lg:max-w-[300px] items-center ">
          <div className="xs:mt-10 lg:mt-20">SELECT SIZE</div>
          <div className="flex flex-row my-10">
            <button className="mx-5 border-2 px-2 text-xs font-bold">S</button>
            <button className="mx-5 border-2 px-2 text-xs font-bold">M</button>
            <button className="mx-5 border-2 px-2 text-xs font-bold">L</button>
          </div>
          <div>SELECT COLOR</div>
          <div className="flex flex-row my-10">
            <button className="mx-3 p-3 border-2 border-red-800 rounded-full text-xs font-bold bg-red-600"></button>
            <button className="mx-3 p-3 border-2 border-green-800 rounded-full text-xs font-bold bg-green-600"></button>
            <button className="mx-3 p-3 border-2 border-blue-800 rounded-full text-xs font-bold bg-blue-600"></button>
            <button className="mx-3 p-3 border-2 border-yellow-500 rounded-full text-xs font-bold bg-yellow-300"></button>
          </div>
          <div className="flex flex-col">
            <div className="mt-5 flex justify-center bg-black text-white">
              price
            </div>
            <div className="my-5 flex justify-center">Rp.100.000</div>
            <div className="flex flex-row justify-center">
              <input
                type="number"
                className="border-2 px-[10px] max-w-[70px] text-center"
              ></input>
              <h1 className="ml-[5px]">pcs</h1>
            </div>
            <button className="mb-10 mt-5 border-2 mx-[30px] min-w-[100px] rounded-md text-white bg-black">
              add to cart
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="justify-center z-10 hidden lg:inline-flex">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="min-w-[300px] min-h-[300px] rounded-2xl bg-center bg-cover duration-500"
            ></div>
          </div>
          <div className="justify-center hidden lg:inline-flex -mt-[50px]">
            <div className="border-2 rounded-[50%] py-[50px] px-[200px] -z-10"></div>
          </div>
          <div className="flex-row justify-between hidden lg:inline-flex mt-5">
            <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
              {' '}
              <BsChevronCompactLeft onClick={prevSlide} className="" />{' '}
            </div>
            <div className="flex flex-row justify-around ">
              <div className="text-xl ml-5">S</div>
              <div className="text-xl ml-5">S</div>
              <div className="text-xl mx-5">S</div>
              <div className="text-xl mr-5">S</div>
              <div className="text-xl mr-5">S</div>
            </div>
            <div className="rounded-full p-1 mx-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:max-w-[950px] lg:max-w-[400px] xs:items-center lg:items-start">
          <h1 className="font-semibold xs:mt-5 lg:mt-10">POT GLAZE</h1>
          <h1 className="font-bold xs:my-5 lg:my-10">CHINESE ORNAMENT</h1>
          <h1 className="font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h1>
        </div>
      </div>
    </>
  );
};
export default Products;
