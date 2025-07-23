const Search = () => {
  return (
    <>
      {/* filter utama? */}
      <div className="flex items-center justify-center pb-[36px] mt-10 mx-5">
        <div className=" w-[900px] h-[140px] bg-white border border-[#555486] flex justify-center items-center rounded-[16px] right-[100px] shadow-md sm:text-[17px] xs:text-[12px]">
          <div className="grid grid-cols-3 gap-[50px] mx-5">
            {/* seach */}
            <div>
              <div className="px-4">Search Product</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Pot"
                  className="py-2 px-4 md:px-5 w-full appearance-none text-input xs:text-[9px] sm:text-[12px] md:text-[15px] font-body placeholder-body min-h-[15px] transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className=" pr-[16px] border-solid border-gray-400 md:w-[200px] sm:w-[150px] xs:w-[100px]" />
            </div>

            {/* place */}
            <div>
              <div className=" px-4">Category</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Outdoor"
                  className="py-5 px-4 md:px-5 w-full appearance-none text-input xs:text-[9px] sm:text-[12px] md:text-[15px] font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className="border-solid border-gray-400 md:w-[200px] sm:w-[150px] xs:w-[100px]" />
            </div>

            {/* time */}

            <div>
              <div className=" px-4">Price</div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Rp. 0-1.000.000"
                  className="py-2 px-4 md:px-5 w-full appearance-none text-input xs:text-[9px] sm:text-[12px] md:text-[15px] font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white  focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <hr className="border-solid border-gray-400 md:w-[200px] sm:w-[150px] xs:w-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
