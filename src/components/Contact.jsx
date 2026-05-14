import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d63601d6-bf0c-4e5d-ac4f-39fa6a775ab5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section
      id="contact"
      className="bg-[#fffaf2] text-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* Left Content */}
        <div>
          <p className="text-[#8b5e00] uppercase tracking-[4px] font-semibold mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2b1a00] leading-tight">
            Let’s Build <br />
            Global Trade Together
          </h1>

          <p className="text-gray-700 mt-6 leading-8 text-lg">
            Connect with us for premium export-quality litchis,
            bulk orders, partnerships, and worldwide shipment inquiries 🍒
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-5">

            <div className="bg-white border border-[#f1dfb6] rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
              <p className="flex gap-4 items-start leading-7 text-gray-700">
                <FaMapMarkerAlt className="mt-1 text-[#b57a00] text-xl shrink-0" />

                <span>
                  01, Phase 1, Rivera Town, Near Mata Mandir,
                  Bhopal, MP - 462003
                </span>
              </p>
            </div>

            <div className="bg-white border border-[#f1dfb6] rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
              <p className="flex gap-4 items-center text-gray-700">
                <FaPhoneAlt className="text-[#b57a00] text-lg" />

                <span>+91 87704 91425</span>
              </p>
            </div>

            <div className="bg-white border border-[#f1dfb6] rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
              <p className="flex gap-4 items-center break-all text-gray-700">
                <FaEnvelope className="text-[#b57a00] text-lg" />

                <span>kapeeshseedsplant@gmail.com</span>
              </p>
            </div>
          </div>


        </div>

        {/* Right Form */}
        <div className="bg-white border border-[#f1dfb6] rounded-[30px] p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#2b1a00] mb-8">
            Send Us Message
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#fffaf2] border border-[#ead6aa] rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-500 outline-none focus:border-[#b57a00] transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#fffaf2] border border-[#ead6aa] rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-500 outline-none focus:border-[#b57a00] transition"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#fffaf2] border border-[#ead6aa] rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-500 outline-none focus:border-[#b57a00] transition"
              />
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#fffaf2] border border-[#ead6aa] rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-500 outline-none focus:border-[#b57a00] transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#b57a00] hover:bg-[#9c6900] text-white py-4 rounded-xl text-lg font-bold transition duration-300 shadow-lg"
            >
              Send Message
            </button>
            <p>{result}</p>

          </form>
        </div>

      </div>
      {/* Google Map */}
      <div className="m-10 rounded-3xl overflow-hidden shadow-2xl border border-[#f1dfb6] h-[420px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29332.04878855269!2d77.36860635959653!3d23.22466349622435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42c407ccb96b%3A0x8c67cbce09176b6d!2sBhopal%2C%20Madhya%20Pradesh%20462003!5e0!3m2!1sen!2sin!4v1778317560410!5m2!1sen!2sin" className="w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default Contact;