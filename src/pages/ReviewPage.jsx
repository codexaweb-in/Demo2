import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from "../assets/reviewBanner.png"

const reviews = [
  {
    name: "David Miller",
    country: "United Kingdom",
    review:
      "Exceptional wheat quality and very professional export service. Packaging and shipment were perfectly handled.",
  },
  {
    name: "Ahmed Khan",
    country: "UAE",
    review:
      "Kapeesh Seeds Plant delivers premium quality products consistently. Highly reliable international supplier.",
  },
  {
    name: "Sophia Williams",
    country: "Canada",
    review:
      "We were impressed by the freshness, purity, and timely delivery. Great communication throughout the process.",
  },
  {
    name: "Rajveer Singh",
    country: "India",
    review:
      "Excellent business experience with trusted service and export-grade agricultural products.",
  },
  {
    name: "Michael Brown",
    country: "Australia",
    review:
      "Professional team with top-quality wheat exports. Looking forward to long-term partnership.",
  },
  {
    name: "Ali Hassan",
    country: "Saudi Arabia",
    review:
      "Outstanding packaging quality and smooth international shipment experience.",
  },
];

const ReviewPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[45vh] md:h-[45vh] mt-20 overflow-hidden">
        
        <img
          src={banner}
          alt="Reviews Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          
          <p className="text-amber-300 uppercase tracking-[5px] font-semibold mb-4">
            Client Testimonials
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Trusted By <br />
            <span className="text-amber-400">
              Global Buyers
            </span>
          </h1>

          <p className="text-gray-200 mt-6 max-w-2xl text-lg leading-8">
            See what our international clients say about our
            wheat quality, export standards, and trusted services 🌾
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gradient-to-b from-white via-[#fffaf2] to-white py-24 px-6 md:px-16">
        
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-amber-600 uppercase tracking-[4px] font-semibold mb-3">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#2b1a00]">
              What Our Clients Say
            </h2>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {reviews.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-amber-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 relative overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-400 text-xl mb-5">
                    ⭐ ⭐ ⭐ ⭐ ⭐
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 leading-8 text-[15px]">
                    “{item.review}”
                  </p>

                  {/* User */}
                  <div className="mt-8 border-t border-amber-100 pt-5">
                    <h3 className="text-[#2b1a00] text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-amber-600 text-sm mt-1">
                      {item.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ReviewPage;