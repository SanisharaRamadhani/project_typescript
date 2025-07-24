'use client';

import Image from 'next/image';
import Link from 'next/link';

const Cards = () => {
  return (
    <Link href="/shop/products">
      <div className="cursor-pointer block max-w-[18rem] rounded-lg bg-amber-400">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image
            src="/ceramics6.avif"
            alt="product1"
            width={288}
            height={180}
            className="rounded-t-lg"
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
