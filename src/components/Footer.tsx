import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://www.facebook.com/sansan.dcrs/',
      label: 'Facebook',
      svg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: '#',
      label: 'Instagram',
      svg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06..."
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: '#',
      label: 'Twitter',
      svg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
        </svg>
      ),
    },
    {
      href: '#',
      label: 'GitHub',
      svg: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484..."
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const navLinks = [
    {
      title: 'COMPANY INFORMATION',
      items: [
        'About Us',
        'Find Dirja',
        'History',
        'Custom Order & Collaboration',
        'Paint a Pot',
        'Make a Pot',
      ],
    },
    {
      title: 'CUSTOMER CARE',
      items: [
        'Terms & Conditions',
        'Return & Exchange',
        'Quality Care',
        'FAQ',
        'Contact Us',
        'Privacy',
      ],
    },
    {
      title: 'Local Delivery Partners',
      items: ['JNE', 'JNT', 'Kantor Pos'],
    },
  ];

  return (
    <div className="bg-white-900 border-t-4">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4 border-b-4 pb-5">
          {/* Logo & Address */}
          <div>
            <Link href="/">
              <Image
                src="/dirjaslogo.png"
                alt="logos"
                width={125}
                height={125}
              />
            </Link>
            <p className="mt-4 text-sm text-black">Klaten Regency,</p>
            <p className="text-sm text-black">INDONESIA.</p>

            <p className="mt-10 text-md font-bold text-black">FOLLOW US</p>
            <div className="flex mt-2 space-x-6 text-black">
              {socialLinks.map(({ href, label, svg }) => (
                <Link
                  key={label}
                  className="hover:opacity-75"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{label}</span>
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 grid gap-8 lg:grid-cols-3">
            {navLinks.map(({ title, items }) => (
              <div key={title}>
                <p className="font-bold">{title}</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-black">
                  {items.map((item) => (
                    <Link key={item} className="hover:opacity-75" href="#">
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs text-black">© 2024 DIRJA CERAMICS</p>
      </div>
    </div>
  );
};

export default Footer;
