import Footer from '@/components/Footer';
import LikeUser from '@/components/LikeUser';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="xs:mx-10 sm:mx-20 md:mx-30 lg:mx-30 my-10">
          <div className="text-[50px] font-extrabold">Products like</div>
          <hr className="w-full border-2 mt-5 mb-20"></hr>
          <LikeUser />
          <LikeUser />
          <LikeUser />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
