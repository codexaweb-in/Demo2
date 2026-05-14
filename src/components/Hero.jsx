import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [hero];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slide);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[6px] text-yellow-400 mb-4 md:font-medium md:text-2xl text-sm md:mt-0 mt-25">
            Premium Agricultural Exports
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
            From Golden Wheat Fields <br /> To Global Markets          </h1>

          <p className="text-sm md:text-xl text-gray-200 mb-8">
            Delivering high-quality wheat and agricultural products with trusted sourcing,
            consistent supply, and competitive pricing across international markets.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              Get Quote
            </Link>



          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
