import Image from 'next/image';
import Link from 'next/link';
import Cards2 from './Cards2';

const Favorites = () => {
  return (
    <>
      <div className=" grid grid-cols-3 md:px-40 sm:px-20 xs:px-10 pb-[50px] pt-[50px]">
        <div></div>
        <Link href="/shop">
          <p className="font-bold lg:text-xl md:text-lg sm:text-md flex justify-center">
            All time Favorite{' '}
          </p>
        </Link>
        <div className="flex justify-end ">
          <Link href="/shop">
            {' '}
            <h1>View all</h1>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
          </svg>
        </div>
      </div>

      <div className="flex md:flex-row xs:flex-col justify-center items-center gap-5 md:mx-60 sm:mx-40 xs:mx-20 mb-10">
        <Cards2 />
        <Cards2 />
        <Cards2 />
      </div>
      <div className="flex md:flex-row xs:flex-col justify-center items-center gap-5 md:mx-60 sm:mx-40 xs:mx-20 mb-10">
        <Cards2 />
        <Cards2 />
        <Cards2 />
      </div>
      <div className="flex md:flex-row xs:flex-col justify-center items-center gap-5 md:mx-60 sm:mx-40 xs:mx-20 mb-10">
        <Cards2 />
        <Cards2 />
        <Cards2 />
      </div>
    </>
  );
};
export default Favorites;
