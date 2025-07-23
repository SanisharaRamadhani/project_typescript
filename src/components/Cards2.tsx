import Image from 'next/image';
import Link from 'next/link';

const Cards2 = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="cursor-pointers block max-w-[18rem] rounded-lg bg-amber-400 ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src="/ceramics6.avif" alt="hdh" />
          </div>
          <div className="p-6">
            <div className="text-base text-neutral-600 dark:text-neutral-200">
              <div className="p-3">
                <div className="text-md font-bold">POT</div>
                <h1 className="font-light text-sm leading-6 text-gray-700 my-2">
                  Glaze
                </h1>
                <p className="paragraph-normal text-gray-600">Earthenware</p>
                <p className="paragraph-normal text-gray-600">
                  Rp. 50.000 - 150.000
                </p>
                <Link className="mt-3 block" href="#"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards2;
