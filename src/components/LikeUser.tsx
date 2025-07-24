'use client';

import Image from 'next/image';
import { useState } from 'react';

const LikeUser = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 lg:px-40 py-6 gap-6">
        {/* Left Image */}
        <div className="relative w-[200px] h-[200px] rounded-3xl overflow-hidden">
          <Image
            src="/ceramics2.avif"
            alt="Ceramics"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">POT</div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-lg font-semibold text-black">
            <span>Glaze</span>
            <span>Earthenware</span>
            <button onClick={handleOpen} className="text-amber-600">
              Describe
            </button>
          </div>
        </div>

        {/* Right Button */}
        <button className="px-4 py-2 rounded-full bg-black text-white font-bold text-lg">
          Check
        </button>
      </div>

      {/* Toggle Description */}
      <div
        className={`px-4 sm:px-10 lg:px-40 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <p className="text-justify text-base text-gray-700 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </>
  );
};

export default LikeUser;
