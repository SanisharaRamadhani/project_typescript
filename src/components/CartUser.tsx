import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const CartUser = () => {
  return (
    <>
      <div className="flex xs:flex-col md:flex-row xs:my-5 lg:my-10 xs:justify-center md:justify-around items-center">
        <FaCheck className="min-w-[20px] xs:text-[20px] xs:mt-[10px] md:mt-0 xs:mx-[10px] lg:ml-20 border-2 border-black p-1"></FaCheck>
        <Image
          src="/ceramics2.avif"
          alt="Logo Cart"
          className="xs:w-[200px] md:w-[200px] rounded-3xl xs:mx-0 lg:mx-20 xs:mt-[10px] md:mt-0"
        ></Image>
        <div className="flex flex-col items-center xs:mt-[10px] md:mt-0">
          <div className="text-xl font-bold mt-5">POT</div>
          <div className="flex flex-row mt-5">
            <div className="mx-5 text-lg font-semibold text-black">1</div>
            <div className="mx-5 text-lg font-semibold text-black">x</div>
            <div className="mx-5 text-lg font-semibold text-amber-600">
              Rp.100.000
            </div>
          </div>
        </div>
        <button className="flex md:mx-[10px] lg:mr-20 xs:my-[20px] md:my-[50px] px-[7px] rounded-full bg-black text-white items-center text-lg font-bold">
          X
        </button>
      </div>
    </>
  );
};
export default CartUser;
