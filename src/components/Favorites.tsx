import Link from 'next/link';
import Cards2 from './Cards2';

const Favorites = () => {
  const rows = 3;
  const cardsPerRow = 3;

  return (
    <>
      {/* Header */}
      <div className="grid grid-cols-3 md:px-40 sm:px-20 xs:px-10 pb-[50px] pt-[50px]">
        <div /> {/* Spacer */}
        <Link href="/shop">
          <p className="font-bold lg:text-xl md:text-lg sm:text-md flex justify-center cursor-pointer">
            All time Favorite
          </p>
        </Link>
        <div className="flex justify-end items-center gap-1">
          <Link href="/shop">
            <span className="hover:underline">View all</span>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={`favorite-row-${rowIndex}`}
          className="flex md:flex-row xs:flex-col justify-center items-center gap-5 md:mx-60 sm:mx-40 xs:mx-20 mb-10"
        >
          {[...Array(cardsPerRow)].map((_, cardIndex) => (
            <Cards2 key={`favorite-card-${rowIndex}-${cardIndex}`} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Favorites;
