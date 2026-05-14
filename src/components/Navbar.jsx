import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-24">

        {/* Logo */}
        {/* <Link to="/">
          <img
            src="/logopreview.png"
            alt="Logo"
            className="w-20 md:w-24 mt-2 object-contain cursor-pointer hover:scale-105 transition duration-300"
          />
        </Link> */}
        <h1>Company Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center text-yellow-500">

          <li>
            <Link
              to="/"
              className="hover:text-yellow-700 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-yellow-700 transition"
            >
              About
            </Link>
          </li>

          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center gap-2 hover:text-yellow-700 transition"
            >
              Products
              <FaChevronDown
                className={`text-xs transition duration-300 ${productOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {productOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-2xl rounded-xl w-52 py-0 text-black">
                <Link
                  to="/products/wheat-1544"
                  className="block px-4 py-2 hover:bg-yellow-100 transition"
                >
                  Wheat 1544
                </Link>

                <Link
                  to="/products/wheat-1634"
                  className="block px-4 py-2 hover:bg-yellow-100 transition"
                >
                  Wheat 1634
                </Link>

                <Link
                  to="/products/wheat-1650"
                  className="block px-4 py-2 hover:bg-yellow-100 transition"
                >
                  Wheat 1650
                </Link>

                <Link
                  to="/products/wheat-8759"
                  className="block px-4 py-2 hover:bg-yellow-100 transition"
                >
                  Wheat 8759
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/testimonials"
              className="hover:text-yellow-700 transition"
            >
              Testimonials
            </Link>
          </li>

            <li>
            <Link
              to="/landingPage"
              className="hover:text-yellow-700 transition"
            >
             Landing Page
            </Link>
          </li>

          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl hover:bg-yellow-300 transition font-semibold"
          >
            Contact Now
          </Link>
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-white/10 px-6 py-5 space-y-5 text-sm font-medium text-white shadow-xl">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            About
          </Link>

          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="flex items-center justify-between w-full hover:text-yellow-300"
            >
              Products
              <FaChevronDown
                className={`transition duration-300 ${mobileProductOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {mobileProductOpen && (
              <div className="ml-4 mt-3 space-y-3 text-gray-300">
                <Link
                  to="/products/wheat-1544"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-300"
                >
                  Wheat 1544
                </Link>

                <Link
                  to="/products/wheat-1634"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-300"
                >
                  Wheat 1634
                </Link>

                <Link
                  to="/products/wheat-1650"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-300"
                >
                  Wheat 1650
                </Link>

                <Link
                  to="/products/wheat-8759"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-300"
                >
                  Wheat 8759
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/testimonials"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-yellow-300"
          >
            Testimonials
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-300 transition font-semibold"
          >
            Contact Now
          </Link>
        </div>
      )}
    </nav>
  );
}