'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

const Transaction = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrop = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="mx-5 my-10 sm:mx-10 md:mx-16 lg:mx-20">
      {/* Alamat Pengiriman */}
      <div className="mb-3">
        <p className="text-lg font-semibold">Alamat pengiriman kamu</p>
        <div className="flex justify-between max-w-[500px]">
          <div className="flex flex-col">
            <span>location</span>
            <span>my</span>
          </div>
          <FaAngleRight className="text-xl my-auto" />
        </div>
      </div>

      {/* Produk + Pengiriman */}
      <div className="border-4 rounded-xl p-5 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/ceramics2.avif"
            alt="Produk"
            width={200}
            height={200}
            className="rounded-3xl mx-0 md:mx-10 my-5"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mt-5">POT</h2>
            <div className="flex justify-center md:justify-start mt-5">
              <span className="mx-2 text-lg font-semibold">3</span>
              <span className="mx-2 text-lg font-semibold">x</span>
              <span className="mx-2 text-lg font-semibold text-amber-600">
                Rp.100.000
              </span>
            </div>
          </div>
        </div>

        {/* Pilih Pengiriman */}
        <div className="w-full max-w-sm mt-5 relative">
          <div
            onClick={handleDrop}
            className="cursor-pointer border-4 rounded-lg p-3 flex justify-between items-center"
          >
            <span className="font-semibold">Pilih Pengiriman</span>
            <FaAngleRight
              className={`transition-transform duration-300 ${
                menuOpen ? 'rotate-90' : ''
              }`}
            />
          </div>

          {menuOpen && (
            <div className="absolute top-[60px] left-0 w-full bg-white border-4 shadow-2xl rounded-lg z-10">
              {['JNT', 'JNE', 'Ninja Express', 'Kantor Pos'].map((item) => (
                <div
                  key={item}
                  onClick={handleDrop}
                  className="px-4 py-2 hover:text-amber-400 cursor-pointer font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ringkasan */}
        <div className="w-full max-w-md mt-8">
          <hr className="border-2" />
          <p className="text-amber-400 text-center mt-5">
            Cek ringkasan belanjamu, yuk
          </p>

          <div className="mt-2 text-amber-400 space-y-2">
            <div className="flex justify-between">
              <span>Total Harga (3 Barang)</span>
              <span>Rp.300.000</span>
            </div>
            <div className="flex justify-between">
              <span>Total Ongkos Kirim</span>
              <span>Rp.25.000</span>
            </div>
          </div>

          <hr className="border-2 mt-5" />

          <div className="mt-5 flex justify-between text-amber-400 font-bold">
            <span>Total Belanja</span>
            <span>Rp.325.000</span>
          </div>

          <hr className="border-2 mt-5" />
        </div>

        {/* Tombol Pilih Pembayaran */}
        <button className="mt-10 px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl">
          Pilih Pembayaran
        </button>
      </div>
    </div>
  );
};

export default Transaction;
