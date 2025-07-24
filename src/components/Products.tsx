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
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const Carousel = ({ isMobile }: { isMobile: boolean }) => (
    <div className={`justify-center ${isMobile ? 'inline-flex lg:hidden' : 'hidden lg:inline-flex'}`}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="min-w-[300px] min-h-[300px] rounded-2xl bg-center bg-cover duration-500"
      />
      <div className="absolute mt-[250px] flex justify-between w-full px-5">
        <div onClick={prevSlide} className="rounded-full p-1 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft />
        </div>
        <div onClick={nextSlide} className="rounded-full p-1 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight />
        </div>
      </div>
    </div>
  );

  return (
    <div className="xs:mx-10 lg:mx-20 xs:mb-5 lg:mb-10 mt-10 flex xs:flex-col lg:flex-row xs:justify-center lg:justify-between gap-10">
      {/* Carousel for Mobile */}
      <Carousel isMobile={true} />

      {/* Product Options */}
      <div className="flex flex-col xs:max-w-[930px] lg:max-w-[300px] items-center">
        <div className="xs:mt-10 lg:mt-20 font-semibold">SELECT SIZE</div>
        <div className="flex flex-row my-10">
          {['S', 'M', 'L'].map((size) => (
            <button key={size} className="mx-5 border-2 px-4 py-1 text-xs font-bold">
              {size}
            </button>
          ))}
        </div>

        <div className="font-semibold">SELECT COLOR</div>
        <div className="flex flex-row my-10">
          {['red-600', 'green-600', 'blue-600', 'yellow-300'].map((color, idx) => (
            <button
              key={idx}
              className={`mx-3 p-3 border-2 rounded-full bg-${color}`}
              style={{ borderColor: color.replace('-600', '-800') }}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <div className="mt-5 flex justify-center bg-black text-white py-2">Price</div>
          <div className="my-5 flex justify-center font-bold">Rp. 100.000</div>
          <div className="flex flex-row justify-center items-center">
            <input type="number" defaultValue={1} min={1} className="border-2 px-2 w-[70px] text-center" />
            <span className="ml-2">pcs</span>
          </div>
          <button className="mb-10 mt-5 border-2 px-4 py-2 rounded-md text-white bg-black">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Carousel for Desktop */}
      <div className="flex flex-col justify-center">
        <Carousel isMobile={false} />
      </div>

      {/* Description */}
      <div className="flex flex-col xs:max-w-[950px] lg:max-w-[400px] xs:items-center lg:items-start">
        <h1 className="font-semibold xs:mt-5 lg:mt-10">POT GLAZE</h1>
        <h1 className="font-bold xs:my-5 lg:my-10">CHINESE ORNAMENT</h1>
        <p className="font-light text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
          industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of
          type and scrambled it to make a type specimen book, it survived five centuries and transitioned
          into electronic typesetting.
        </p>
      </div>
    </div>
  );
};

export default Products;
