'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LikeUser = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex xs:flex-col md:flex-row xs:my-5 lg:my-10 xs:justify-center md:justify-around items-center">
        <Image
          src="/ceramics2.avif"
          alt="Logo menu open"
          className="xs:w-[200px] md:w-[200px] rounded-3xl xs:mx-0 md:ml-[10px] lg:ml-[20px] my-[20px]"
        ></Image>
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mt-5">POT</div>
          <div className="flex flex-row mt-5 justify-around">
            <div className="md:ml-5 text-lg font-semibold text-black">
              Glaze
            </div>
            <div className="xs:mx-5 text-lg font-semibold text-black">
              Earthenware
            </div>
            <button
              onClick={handleOpen}
              className="xs:mr-5 text-lg font-semibold text-amber-600"
            >
              Describe
            </button>
          </div>
        </div>
        <button className="flex xs:mr-[10px] lg:mr-[20px] my-[20px] px-[10px] rounded-full bg-black text-white items-center text-lg font-bold">
          check
        </button>
      </div>
      <div
        className={
          menuOpen
            ? 'xs:mx-10 lg:mx-40 xs:-mt-[30px] md:-mt-[10px] mb-5 duration-500'
            : 'xs:mx-10 lg:mx-40 xs:-mt-[30px] md:-mt-[10px] mb-5 hidden duration-500'
        }
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&#39;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </>
  );
};
export default LikeUser;
