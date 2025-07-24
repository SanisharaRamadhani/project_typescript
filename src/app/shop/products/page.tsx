import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Events from '@/components/Events';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Products />
        <Events />
        <Footer />
      </div>
    </>
  );
};

export default Home;