import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Transaction from '@/components/Transaction';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Transaction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
