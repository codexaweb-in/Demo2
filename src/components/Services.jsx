import React from "react";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaLeaf,
  FaHandshake,
  FaBoxes,
  FaAward,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaGlobeAsia />,
      title: "Global Export Network",
      desc: "Connecting Indian farms to international markets with smooth logistics and trusted delivery channels.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast & Reliable Delivery",
      desc: "Efficient shipping with secure packaging to ensure products reach you safely and on time.",
    },
    {
      icon: <FaLeaf />,
      title: "100% Natural Quality",
      desc: "Carefully sourced agricultural products maintaining purity, freshness and consistent quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Business You Can Trust",
      desc: "We build long-term partnerships through transparency, reliability and consistent performance.",
    },
    {
      icon: <FaBoxes />,
      title: "Bulk & Wholesale Supply",
      desc: "Flexible bulk orders with competitive pricing tailored for global buyers and distributors.",
    },
    {
      icon: <FaAward />,
      title: "Export Grade Standards",
      desc: "Strict quality checks and international compliance to meet global export requirements.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 bg-gradient-to-b from-[#fffdf7] to-[#fef6e6]"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#b76e00] font-semibold uppercase tracking-[5px] mb-3">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Complete Export Solutions <br /> Under One Roof
          </h2>

          <p className="text-gray-600 text-lg">
            From sourcing premium agricultural products to global delivery, we handle 
            everything with precision, quality, and reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-[#f1e2c6] rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f5e3c2] text-[#9c5a12] text-2xl flex items-center justify-center mb-6 group-hover:bg-[#9c5a12] group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* subtle line */}
              <div className="w-10 h-[2px] bg-[#9c5a12] mt-5 opacity-70 group-hover:w-16 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;