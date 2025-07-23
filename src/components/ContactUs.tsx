import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaWhatsappSquare, FaInstagram } from 'react-icons/fa';
import { CiMail, CiLocationOn } from 'react-icons/ci';

const ContactUs = () => {
  return (
    <>
      <div className="mx-20">
        <div className="mx-20 lg:mt-[130px] md:mt-[120px] sm:mt-[100px] xs:mt-[80px] flex justify-center z-20 font-bold lg:text-[50px] md:text-[38px] sm:text-[26px] xs:text-[20px] text-slate-800 my-5">
          Kontak Kami
        </div>
        <div className="flex flex-col items-center mx-20 xs:mt-[160px] sm:mt-[170px] md:mt-[190px] z-10 absolute inset-x-0 top-0 font-bold lg:text-[130px] md:text-[95px] sm:text-[75px] xs:text-[50px] text-black/10 my-5">
          <hr className="border-solid md:border-b-4 xs:border-b-2 border-amber-400 lg:w-[310px] md:w-[230px] sm:w-[160px] xs:w-[130px]"></hr>
          <div className="xs:-mt-[5px] sm:-mt-[10px] md:-mt-[15px] lg:-mt-[20px]">
            Kontak Kami
          </div>
        </div>
      </div>
      <div className="mx-20">
        <div className="flex justify-center">
          <div className="min-w-[323px] max-h-[400px] grid grid-cols-4 lg:mt-[110px] md:mt-[80px] xs:mt-[40px] border-8 border-amber-400 rounded-lg">
            <div className="grid grid-rows-4 justify-center py-10">
              <a href="https://www.facebook.com/sansan.dcrs/" target="_blank">
                <FaFacebook className="text-[40px] my-1 text-blue-700 cursor-pointer ">
                  facebook
                </FaFacebook>
              </a>
              <a href="#" target="_blank">
                <FaInstagram className="text-[40px] my-1 text-red-400"></FaInstagram>
              </a>
              <a href="#" target="_blank">
                <FaWhatsappSquare className="text-[40px] my-1 text-green-500"></FaWhatsappSquare>
              </a>
              <a href="#" target="_blank">
                <CiMail className="text-[40px] my-1 text-rose-700"></CiMail>
              </a>
            </div>
            <div className="grid grid-rows-4 col-span-3 justify-start py-10">
              <a href="https://www.facebook.com/sansan.dcrs/" target="_blank">
                <h1 className="my-4 ">Sekaramik Chilpa Wijangga</h1>
              </a>
              <a href="#" target="_blank">
                <h1 className="my-3">Sekaramik Chilpa Wijangga</h1>
              </a>
              <a href="#" target="_blank">
                <h1 className="my-3">085655960543</h1>
              </a>
              <a href="#" target="_blank">
                <h1 className="my-4">sekaramik.cw@gmail.com</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <div className="mx-20 lg:mt-[185px] md:mt-[150px] sm:mt-[130px] xs:mt-[80px] flex justify-center z-20 font-bold lg:text-[50px] md:text-[38px] sm:text-[26px] xs:text-[20px] text-slate-800 my-5">
          Kantor Kami
        </div>
        <div className="flex flex-col items-center mx-20 xs:mt-[650px] sm:mt-[720px] md:mt-[810px] lg:mt-[900px] z-10 absolute inset-0 font-bold lg:text-[130px] md:text-[95px] sm:text-[75px] xs:text-[50px] text-black/10 my-5">
          <hr className="border-solid md:border-b-4 xs:border-b-2 border-amber-400 lg:w-[310px] md:w-[230px] sm:w-[160px] xs:w-[130px]"></hr>
          <div className="xs:-mt-[3px] sm:-mt-[7px] lg:-mt-[15px]">
            Kantor Kami
          </div>
        </div>
        <div className="xs:mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]">
          <div className="flex flex-rows justify-center items-center xs:min-w-[320px] sm:min-w-[420px] md:min-w-[520px] lg:min-w-[620px]">
            <a
              href="https://maps.app.goo.gl/TAVveSnGctTrEmr5A"
              target="_blank"
              className="flex flex-rows justify-center items-center"
            >
              <CiLocationOn className="text-red-600 xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[60px]"></CiLocationOn>
              <h1 className="text-justify xs:text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px]">
                Sekarkalam, Kel. Melikan, Kec. Wedi, Kab. Klaten
              </h1>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="min-w-[323px] min-h-[250px] mb-10 lg:mt-[80px] md:mt-[70px] sm:mt-[60px] xs:mt-[50px] border-8 border-amber-400 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.06593774348565!2d110.62835392330008!3d-7.783993277997501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a48a80b5bd489%3A0xf8a29fa20991de67!2sToko%20Dirjo!5e0!3m2!1sid!2sid!4v1710583025663!5m2!1sid!2sid"
              title="Responsive Google Maps"
              className="items-center min-w-[306px] min-h-[250px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
