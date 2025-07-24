'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Hero = () => {
  const slides = [
    { url: '/ceramics1.avif', alt: 'Ceramic 1' },
    { url: '/ceramics2.avif', alt: 'Ceramic 2' },
    { url: '/ceramics3.avif', alt: 'Ceramic 3' },
    { url: '/ceramics4.avif', alt: 'Ceramic 4' },
    { url: '/ceramics5.avif', alt: 'Ceramic 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center">
      <div className="relative xs:h-[250px] xs:w-[360px] sm:h-[350px] sm:w-[460px] md:h-[450px] md:w-[550px] lg:h-[500px] lg:w-[600px] shadow-2xl rounded-2xl overflow-hidden my-10">
        <Image
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          fill
          className="object-cover rounded-2xl"
          priority
        />
        <div className="absolute bottom-10 w-full flex flex-col items-center">
          <div className="flex items-center justify-center text-white text-center text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold bg-white/50 rounded-lg px-2 py-1">
            <button
              onClick={prevSlide}
              className="rounded-full p-2 mx-2 bg-black/20 text-white hover:bg-black/40"
            >
              <BsChevronCompactLeft />
            </button>
            <span className="mx-2 text-amber-900">
              Now it&#39;s easier to get your interior or exterior ceramics
            </span>
            <button
              onClick={nextSlide}
              className="rounded-full p-2 mx-2 bg-black/20 text-white hover:bg-black/40"
            >
              <BsChevronCompactRight />
            </button>
          </div>
          <Link href="/shop" className="mt-4">
            <button className="bg-amber-900 text-white font-semibold rounded-lg px-4 py-2 hover:bg-amber-700">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
