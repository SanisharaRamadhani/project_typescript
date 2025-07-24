import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Search from '@/components/Search';
import Events from '@/components/Events';
import Favorites from '@/components/Favorites';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
        <section>
          <Hero />
        </section>
        <section>
          <Search />
        </section>
        <section>
          <Events />
        </section>
        <section>
          <Favorites />
        </section>
      </main>
      <Footer />
    </>
  );
}
