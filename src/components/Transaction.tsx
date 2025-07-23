'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartUser from './CartUser';
import { FaAngleRight } from 'react-icons/fa';

const Transaction = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDrop = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="xs:mx-5 sm:mx-10 md:mx-16 lg:mx-20 xs:my-10">
        <div className="mx-5">Alamat pengiriman kamu</div>
        <div className="mx-5 mb-3 flex flex-row justify-between max-w-[500px] ">
          <div className="flex flex-col">
            <div>location</div>
            <div>my</div>
          </div>
          <FaAngleRight className="my-3 text-[20px]"></FaAngleRight>
        </div>
        <div className="border-4 rounded-xl xs:min-w-[50px] flex flex-col justify-center items-center ">
          <div className="flex xs:flex-col md:flex-row justify-center items-center ">
            <Image
              src="/ceramics2.avif"
              alt="Logo menu open"
              className="xs:w-[200px] md:w-[200px] rounded-3xl xs:mx-0 md:mx-10 lg:mx-20 xs:my-5"
            ></Image>
            <div className="flex flex-col items-center xs:mx-0 md:mx-10 lg:mx-20 xs:my-5">
              <div className="text-xl font-bold mt-5">POT</div>
              <div className="flex flex-row mt-5">
                <div className="mx-5 text-lg font-semibold text-black">3</div>
                <div className="mx-5 text-lg font-semibold text-black">x</div>
                <div className="mx-5 text-lg font-semibold text-amber-600">
                  Rp.100.000
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div
              onClick={handleDrop}
              className="cursor-pointer border-4 xs:min-w-[200px] my-5 flex flex-row justify-between items-center p-2"
            >
              <h1>Pilih Pengiriman</h1>
              <FaAngleRight
                className={
                  menuOpen
                    ? 'xs:text-[15px] md:text-[20px] rotate-90 duration-500'
                    : 'xs:text-[15px] md:text-[20px] duration-500'
                }
              ></FaAngleRight>
            </div>
            <div
              className={
                menuOpen
                  ? 'absolute bg-white border-4 min-w-[200px] flex-col justify-between items-center py-2 duration-500 inline-flex shadow-2xl z-10'
                  : 'absolute bg-black border-4 min-w-[200px] flex-col justify-between items-center py-2 duration-500 hidden shadow-2xl z-10 -mt-5'
              }
            >
              <div
                onClick={handleDrop}
                className="cursor-pointer text-black font-semibold py-2 px-2 hover:text-amber-400 mt-2"
              >
                JNT
              </div>
              <div
                onClick={handleDrop}
                className="cursor-pointer text-black font-semibold py-2 px-2 hover:text-amber-400 mt-2"
              >
                JNE
              </div>
              <div
                onClick={handleDrop}
                className="cursor-pointer text-black font-semibold py-2 px-2 hover:text-amber-400 mt-2"
              >
                Ninja Express
              </div>
              <div
                onClick={handleDrop}
                className="cursor-pointer text-black font-semibold py-2 px-2 hover:text-amber-400 mt-2"
              >
                Kantor Pos
              </div>
            </div>
          </div>
          <div className="w-full">
            <hr className="border-2 w-full px-10"></hr>
          </div>
          <div className="my-5">
            <div className="text-amber-400 flex justify-center">
              cek ringkasan belanjamu, yuk
            </div>
            <div className="text-amber-400 mt-2 flex flex-row justify-between min-w-[400px]">
              <h1>Total Harga (3 Barang)</h1>
              <h1>Rp.300.000</h1>
            </div>
            <div className="text-amber-400 mt-2 flex flex-row justify-between min-w-[400px]">
              <h1>Total Ongkos Kirim</h1>
              <h1>Rp.25.000</h1>
            </div>
          </div>
          <div className="w-full">
            <hr className="border-2 w-full px-10"></hr>
          </div>
          <div className="my-5">
            <div className="text-amber-400 flex flex-row justify-between min-w-[400px]">
              <h1>Total Belanja</h1>
              <h1>Rp.325.000</h1>
            </div>
          </div>
          <div className="w-full">
            <hr className="border-2 w-full px-10"></hr>
          </div>
          <div className="my-10 p-2 rounded-xl bg-amber-500 font-semibold ">
            Pilih Pembayaran
          </div>
        </div>
      </div>
    </>
  );
};
export default Transaction;
