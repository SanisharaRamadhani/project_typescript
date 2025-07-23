import Image from 'next/image';

const Hero2 = () => {
  return (
    <>
      <div className="xs:mx-20 lg:mx-40 xs:my-10 sm:my-14 md:my-16 lg:my-20">
        <div className=" flex lg:flex-row xs:flex-col">
          <Image
            src="/ceramics3.avif"
            alt="ceramics"
            className="items-center object-cover xs:max-w-[460px] sm:max-w-[585px] lg:min-w-[400px] rounded-xl shadow-2xl"
          />
          <div className="flex flex-col items-center xs:mt-10 lg:mt-0 lg:py-[30px] xs:ml-0 lg:ml-5">
            <h1 className="xs:text-lg sm:text-xl md:text-2xl font-bold text-center">
              Welcome, userName
            </h1>
            <h1 className="xs:text-md sm:text-lg md:text-xl mt-5 font-normal text-justify">
              Dirja Ceramics is a home industry that makes pottery to decorate
              the interior and exterior of your home, is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
