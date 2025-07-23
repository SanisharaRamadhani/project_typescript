import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Events from '@/components/Events';
import Favorites from '@/components/Favorites';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ContactUs />
      <Footer />
    </main>
  );
}
