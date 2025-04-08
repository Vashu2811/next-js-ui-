import Link from "next/link";
import Image from "next/image";
import Chain from "../../public/images/chain.png";
import Logo from "../../public/images/logo.png";
import X from "../../public/images/x.png";
import Instagram from "../../public/images/insta.png";
import Facebook from "../../public/images/face.png";
import ScrollToTopButton from "./ScrollTop";
import "./style.css";

const About = () => {
  
  return (
    <div className="bg-black">
      <div
        className="inset-10 flex flex-col lg:flex-row justify-between items-center text-white bg-cover rounded-3xl border border-black "
        style={{
          backgroundImage: "url('/images/Rectangle2.png')",
          width: "100%",
          height: "63%",
        }}
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left z-20 flex flex-col items-center lg:items-start justify-center py-8 lg:py-12 px-4 lg:px-12 ">
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white m-2 ml-12">
            Experience the
          </p>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-white m-2 ml-12">
            Corprite Difference
          </p>
          <p className="text-gray-400 text-md sm:text-lg lg:text-xl leading-6 mt-4 mb-6 ml-12">
            See how our platform can transform your operations.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-800 text-black py-3 sm:py-4 px-6 sm:px-10 rounded-lg m-2 hover:text-white ml-12">
              Request a Demo
            </button>
          </Link>
        </div>

        <div className="w-full flex justify-center ">
          <Image
            src={Chain}
            alt="Corprite Difference"
            className="rounded-3xl w-full"
            width="90%"
          />
        </div>
      </div>

      <div className="">
        <footer className=" shadow-lg mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
              <p className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">Built in Canada. Trusted globally.</p>

              {/* <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:underline transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white hover:underline transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul> */}

              <div className="flex justify-center">
                <Image src={Logo} alt="Logo" className="logo" />
              </div>
            </nav>

            <hr className="my-8 border-gray-200" />

            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 space-y-reverse">
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
                <li>
                  <span className="text-white">©2025 Corprite</span>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL}privacy-policy/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL}terms-of-service/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>

              <div className="flex justify-center gap-6">
                <a
                  href="https://x.com/incorporight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={X} alt="Twitter" className="social-icon" />
                </a>
                <a
                  href="https://www.facebook.com/incorporight/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Facebook}
                    alt="Facebook"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/corpriteco/?igsh=XFqNHVqeHhxbTJw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
