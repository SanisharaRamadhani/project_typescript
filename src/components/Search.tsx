'use client';
import { useState } from 'react';

const Search = () => {
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="flex items-center justify-center px-4 mt-10 pb-10">
      <div className="w-full max-w-5xl bg-white border border-[#555486] rounded-2xl shadow-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Search Product */}
          <div>
            <label htmlFor="product" className="block text-sm font-medium mb-2">
              Search Product
            </label>
            <input
              id="product"
              name="product"
              type="text"
              placeholder="Pot"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full h-11 px-4 text-sm border border-gray-300 rounded-md focus:ring focus:ring-amber-300 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-2"
            >
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Outdoor"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 px-4 text-sm border border-gray-300 rounded-md focus:ring focus:ring-amber-300 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Rp. 0-1.000.000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-11 px-4 text-sm border border-gray-300 rounded-md focus:ring focus:ring-amber-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
