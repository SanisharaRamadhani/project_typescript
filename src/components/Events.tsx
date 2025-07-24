import Link from 'next/link';
import Cards from './Cards';

const Events = () => {
  // Kita akan render 3 baris dengan 3 Cards tiap baris (total 9 cards)
  const rows = 3;
  const cardsPerRow = 3;

  return (
    <div className="pb-[50px] pt-[50px]">
      {/* Header */}
      <div className="grid grid-cols-3 md:px-40 sm:px-20 xs:px-10 mb-10">
        <div /> {/* Spacer kiri */}

        <Link href="/shop">
          <div className="font-bold lg:text-xl md:text-lg sm:text-md flex justify-center cursor-pointer">
            The Products
          </div>
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

      {/* Product Cards */}
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex md:flex-row xs:flex-col justify-center items-center gap-5 md:mx-60 sm:mx-40 xs:mx-20 mb-10"
        >
          {[...Array(cardsPerRow)].map((_, cardIndex) => (
            <Cards key={`card-${rowIndex}-${cardIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Events;
