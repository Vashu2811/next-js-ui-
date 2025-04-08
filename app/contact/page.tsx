'use client';
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { socialLinks,interestedOptions } from "@/app/constants";

const Contact = () => {

  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <header className="bg-black py-12 mt-16 md:mt-20 text-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">Contact Us</h1>
      </header>

      <main className="flex flex-col md:flex-row gap-8 py-12 px-6 max-w-6xl mx-auto">
        <section className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">Looking to learn more or see a demo? Fill out the form and we’ll get back to you shortly.</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {socialLinks.map(({ Icon, link, label }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition"
              >
                <Icon className="text-black text-lg" />
              </a>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold tracking-widest">HEADQUARTERS</h3>
            <p className="flex items-center gap-3 mt-2 ">
              <FaHome className="text-orange-600" />
              98 Avenue Road, Toronto
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest">SUPPORT</h3>
            <p className="flex items-center gap-3 mt-2 ">
              <IoMailSharp className="text-orange-600" />
              mail@incorporight.com
            </p>
          </div>

          
        </section>

        <section className="w-full md:w-1/2 bg-white text-black rounded-lg shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Reach Out to Our Team</h2>
          <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-semibold mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="help" className="block text-sm font-semibold mb-2">
                I&rsquo;m interested in:
              </label>
              <select
                id="help"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
              >
                {interestedOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {
              selectedOption === "other" && (
                <div className="mb-4">
                  <label htmlFor="other" className="block text-sm font-semibold mb-2">
                    Other
                  </label>
                  <input
                    id="other"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              )
            }    
            

            {/* <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="help" className="block text-sm font-semibold mb-2">
                How can we help?*
              </label>
              <textarea
                id="help"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div> */}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;