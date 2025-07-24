import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CartUser from '@/components/CartUser';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="xs:mx-10 sm:mx-20 md:mx-[120px] my-10">
        <div className="text-[50px] font-extrabold">Shopping Cart</div>
        <hr className="w-full border-2 mt-5 mb-20" />
        <CartUser />
        <CartUser />
        <CartUser />
        <div className="flex flex-row py-[20px] justify-around">
          <div className="flex flex-row items-center">
            <FaCheck className="m-2 border-2 p-1 text-[30px]" />
            <h1>Semua</h1>
          </div>
          <div className="flex flex-col">
            <h1>Total</h1>
            <h1>Rp.300.000</h1>
          </div>
          <Link href="/shop/cart/transaction">
            <button className="px-4 py-2 border-2 border-black rounded-xl">
              Beli (3)
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
