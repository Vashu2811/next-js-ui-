"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" flex items-center justify-between bg-black text-white p-4">
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src={Logo}
            alt="Logo"
            className="w-16 h-16"
            height={64}
            width={64}
          />
        </Link>
        <p className="text-2xl font-bold text-white ml-2">CorpRite</p>
      </div>

      {/* <ul className="hidden md:flex gap-6 lg:gap-12 text-gray-400">
        <li>
          <Link href="/" className="hover:text-white transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="hover:text-white transition duration-300"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="https://incorporight.com"
            target="_blank"
            className="hover:text-white transition duration-300"
          >
            B2C
          </Link>
        </li>
      </ul> */}

      {/* <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          <span className="block w-6 h-1 bg-white mb-1.5"></span>
          <span className="block w-6 h-1 bg-white mb-1.5"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div> */}

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-gray-300 transition duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="https://incorporight.com"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              B2C
            </Link>
          </li>
        </ul>
      )}

      <div className="hidden md:flex gap-4 mr-6">
        <Link
          href="https://ascent.corprite.co/app/login"
          passHref
          target="_blank"
        >
        </Link>
        <Link href="/contact" passHref>
          <button className="bg-white hover:bg-gray-100 text-black py-2 px-6 rounded-md transition duration-300">
          Request a Demo
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
