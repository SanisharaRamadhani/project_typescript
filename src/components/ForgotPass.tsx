import Image from 'next/image';
import Link from 'next/link';

const ForgotPass = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 mb-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Forgot your password
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Please enter the email address you'd like your password reset
                information to
              </label>
              <input
                id="email"
                placeholder="@mail.com"
                type="text"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-md font-semibold capitalize text-white hover:text-black hover:bg-amber-400 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Request reset link
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link href="/login">
                <ul className="underline">Back to Login</ul>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ForgotPass;
