import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4e2300] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">

        {/* Company */}
        <div>
          {/* <img
            src="/logo.png"
            alt="Logo"
            className="w-40 mb-4 object-contain"
          /> */}
          <h1 className="text-blue-600 text-2xl font-bold">Company Logo</h1>

          <p className="text-sm leading-7 text-gray-400">
            Trusted exporter of premium wheat and agricultural products to
            global markets.
          </p>


        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffe2ac] mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/testimonials" classname="hover:text-white transition">
                Testimonials
              </Link>
            </li>

            <li>
              <Link to="/landingPage" className="hover:text-white transition">
                Landing Page
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffe2ac] mb-4">
            Products
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link
                to="/products/wheat-1544"
                className="hover:text-white transition"
              >
                Wheat 1544
              </Link>
            </li>

            <li>
              <Link
                to="/products/wheat-1634"
                className="hover:text-white transition"
              >
                Wheat 1634
              </Link>
            </li>

            <li>
              <Link
                to="/products/wheat-1650"
                className="hover:text-white transition"
              >
                Wheat 1650
              </Link>
            </li>

            <li>
              <Link
                to="/products/wheat-8759"
                className="hover:text-white transition"
              >
                Wheat 8759
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffe2ac] mb-4">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm">

            <p className="flex gap-3 items-start leading-6">
              <FaMapMarkerAlt className="mt-1 text-white text-lg" />

              <span>
                XXXXXXXXXXXXXXXXXXXXX,
                <br />
                XXXXXXXXXXXXXXXX
              </span>
            </p>

            <a
              href="tel:+918770491425"
              className="flex gap-3 items-center hover:text-white transition"
            >
              <FaPhoneAlt className="text-white" />
              +91 xxxxxxxxxx
            </a>

            <a
              href="mailto:xxxxxxxxxx@gmail.com"
              className="flex gap-3 items-center break-all hover:text-white transition"
            >
              <FaEnvelope className="text-white" />
              xxxxxxxxxxxxxxxxxx@gmail.com
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/91xxxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8 mx-6" />

      <p className="text-center text-sm text-gray-400 px-4">
        © {new Date().getFullYear()}
        <span className="text-[#ffe2ac] font-semibold ml-2">
          CodexaWeb
        </span>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;