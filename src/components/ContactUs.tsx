'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsappSquare } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

const contacts = [
  {
    icon: <FaFacebook className="text-[40px] text-blue-700" />,
    label: 'Sekaramik Chilpa Wijangga',
    href: 'https://www.facebook.com/sansan.dcrs/',
  },
  {
    icon: <FaInstagram className="text-[40px] text-red-400" />,
    label: 'Sekaramik Chilpa Wijangga',
    href: '#',
  },
  {
    icon: <FaWhatsappSquare className="text-[40px] text-green-500" />,
    label: '085655960543',
    href: '#',
  },
  {
    icon: <CiMail className="text-[40px] text-rose-700" />,
    label: 'sekaramik.cw@gmail.com',
    href: '#',
  },
];

const ContactUs = () => {
  return (
    <div className="w-full bg-white text-gray-900 py-10 px-6 md:px-10 lg:px-20 space-y-20">
      {/* Decorative Heading */}
      <div className="relative">
        <h1 className="absolute inset-0 text-black/10 text-5xl md:text-7xl font-bold text-center z-0 text-shadow-lg">
          Kontak Kami
        </h1>
        <div className="relative z-10 text-center mt-10">
          <h2 className="text-3xl font-bold text-amber-600">Kantor Kami</h2>
          <p className="mt-2">Kami dengan senang hati akan membantu Anda!</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Media & Info */}
        <div className="border-8 border-amber-400 rounded-lg p-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center space-y-6">
              {contacts.map((c, i) => (
                <a href={c.href} target="_blank" key={i}>
                  {c.icon}
                </a>
              ))}
            </div>
            <div className="col-span-3 flex flex-col justify-center space-y-6">
              {contacts.map((c, i) => (
                <a href={c.href} target="_blank" key={i}>
                  <h1 className="text-lg font-medium">{c.label}</h1>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="border-8 border-amber-400 rounded-lg overflow-hidden aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4936.1725688937295!2d110.62597547593964!3d-7.783906577238997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a48a80b5bd489%3A0xf8a29fa20991de67!2sToko%20Dirjo!5e1!3m2!1sid!2sid!4v1753362714931!5m2!1sid!2sid"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
