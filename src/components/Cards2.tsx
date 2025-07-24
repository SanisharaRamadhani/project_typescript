'use client';

import Image from 'next/image';
import Link from 'next/link';

const Cards2 = () => {
  return (
    <div className="cursor-pointer">
      <div className="block max-w-[18rem] rounded-lg bg-amber-400 shadow-md">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src="/ceramics6.avif"
            alt="Pottery product"
            width={288}
            height={180}
          />
        </div>
        <div className="p-6">
          <div className="p-3">
            <div className="text-md font-bold">POT</div>
            <h1 className="font-light text-sm leading-6 text-gray-700 my-2">
              Glaze
            </h1>
            <p className="text-sm text-gray-600">Earthenware</p>
            <p className="text-sm text-gray-600">Rp. 50.000 - 150.000</p>
            <Link
              href="/shop/products/detail"
              className="mt-3 inline-block text-blue-600 underline"
            >
              Detail Produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
