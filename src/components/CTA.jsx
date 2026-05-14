import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#5a2e00] via-[#8b5a1a] to-[#5a2e00] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Tagline */}
        <p className="uppercase tracking-[4px] text-yellow-300 text-sm font-semibold mb-3">
          Let’s Do Business
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Export Quality Wheat <br /> Direct From India
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get premium wheat varieties with consistent quality, bulk supply, 
          and competitive pricing. We ensure smooth global delivery and 
          long-term business support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Get Best Price
          </Link>

          <a
            href="https://wa.me/918884407783"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#5a2e00] transition"
          >
            Chat on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTA;