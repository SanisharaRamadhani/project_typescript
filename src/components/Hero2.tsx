'use client';

import Image from 'next/image';

const Hero2 = () => {
  return (
    <div className="xs:mx-6 sm:mx-10 md:mx-16 lg:mx-40 xs:my-10 sm:my-14 md:my-16 lg:my-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="relative xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl shadow-2xl overflow-hidden">
          <Image
            src="/ceramics3.avif"
            alt="ceramics"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
        <div className="flex flex-col items-center xs:mt-10 lg:mt-0 lg:py-[30px] xs:ml-0 lg:ml-5">
          <h1 className="text-center font-bold xs:text-lg sm:text-xl md:text-2xl">
            Welcome, userName
          </h1>
          <p className="mt-5 font-normal text-justify xs:text-md sm:text-lg md:text-xl px-2 lg:px-0">
            Dirja Ceramics is a home industry that makes pottery to decorate the
            interior and exterior of your home. It is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
