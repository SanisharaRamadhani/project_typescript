'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const CartUser = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around my-5 lg:my-10 px-4">
      <FaCheck
        className="text-[20px] mt-2 md:mt-0 mx-2 lg:ml-20 border-2 border-black p-1"
        aria-hidden="true"
      />

      <Image
        src="/ceramics2.avif"
        alt="Product in cart"
        width={200}
        height={200}
        className="rounded-3xl my-2 md:my-0 lg:mx-20"
      />

      <div className="flex flex-col items-center mt-2 md:mt-0">
        <div className="text-xl font-bold">POT</div>
        <div className="flex flex-row mt-4">
          <div className="mx-3 text-lg font-semibold text-black">1</div>
          <div className="mx-3 text-lg font-semibold text-black">x</div>
          <div className="mx-3 text-lg font-semibold text-amber-600">
            Rp. 100.000
          </div>
        </div>
      </div>

      <button
        aria-label="Hapus produk dari keranjang"
        className="mt-4 md:mt-0 md:mx-3 lg:mr-20 px-3 py-1 rounded-full bg-black text-white text-lg font-bold"
      >
        X
      </button>
    </div>
  );
};

export default CartUser;
