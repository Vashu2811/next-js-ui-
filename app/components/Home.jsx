import Link from "next/link";
import Image from "next/image";
import sideimg from "../../public/images/Sideimg9.png";

import ScrollToBottomButton from "./ScrollBottom";

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between items-center text-white bg-black bg-cover bg-center h-screen md:h-[85vh]"
        style={{
          backgroundImage: "url('/images/bg_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 text-center lg:text-left px-6 sm:px-12 lg:px-24 mt-16 sm:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The Future of <br/> Corporate  Management <br/> Starts Here
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-400 font-bold leading-6">
          Modern tools for law firms, investors, and founders.
          Powered by secure, blockchain-backed infrastructure.
          Trusted by forward-thinking firms and legal innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 font-bold items-center justify-center ">
            <Link href="/contact" passHref>
              <button className="bg-white text-black  py-3 px-8 sm:py-4 sm:px-12 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300">
                Request a Demo
              </button>
            </Link>
            {/* <Link href="/pricing" passHref>
              <button
                className="text-white py-3 px-8 sm:py-4 sm:px-12 rounded-xl relative overflow-hidden"
                style={{ backgroundImage: "url('/images/button.png')" }}
              >
                View Pricing
              </button>
            </Link> */}
          </div>
        </div>

        <ScrollToBottomButton />

        <div className="flex-1 max-w-full px-6 sm:px-12 lg:px-0">
          <Image
            loading="lazy"
            draggable="false"
            src={sideimg}
            alt="Hero section banner"
            className="object-contain w-full rounded-none max-h-[300px] sm:max-h-[400px] lg:max-h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
