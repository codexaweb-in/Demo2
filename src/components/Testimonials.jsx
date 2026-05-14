import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed Khan",
      country: "Delhi",
      text: "Consistent wheat quality and smooth delivery process. A reliable export partner for bulk orders.",
    },
    {
      name: "Riya Gupta",
      country: "Gujrat",
      text: "Impressed with packaging and grain quality. Everything arrived on time and in perfect condition.",
    },
    {
      name: "Aman",
      country: "Mumbai",
      text: "Professional service with competitive pricing. Their wheat quality meets international standards.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-[#fffaf3] to-[#fef6e6] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c27a2c] font-semibold tracking-[4px] uppercase text-sm">
            Client Feedback
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2300] mt-3 leading-tight">
            Trusted By Buyers Worldwide
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-7">
            Our commitment to quality, timely delivery, and transparent business 
            practices has earned trust across global markets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300 border border-[#f1e1c5] group"
            >
              <FaQuoteLeft className="text-[#d89c4a] text-3xl mb-5 group-hover:scale-110 transition" />

              <p className="text-gray-600 leading-7 text-sm">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 text-[#f8b400] mt-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-[#4e2300] text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;