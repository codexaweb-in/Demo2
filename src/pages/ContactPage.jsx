import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import contactBanner from "../assets/contact.jpg";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="relative w-full h-[45vh] md:h-[45vh] mt-20 overflow-hidden">

        {/* Background Image */}
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <p className="text-yellow-400 uppercase tracking-[6px] font-semibold mb-4">
            Get In Touch
          </p>   

          <h1 className="text-3xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Contact Us
          </h1>

          <p className="text-gray-200 mt-5 max-w-2xl text-sm md:text-lg leading-7">
            We are here to help you with premium quality wheat products,
            inquiries, partnerships, and bulk orders.
          </p>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;