import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import aboutimg from "../assets/about.png";
import wheat1544 from "../assets/wheat1544.jpg";
import wheat1634 from "../assets/wheat1634.jpg";
import wheat1650 from "../assets/wheat1650.jpg";
import wheat8759 from "../assets/wheat8759.jpg";

const productsData = {
  "wheat-1544": {
    name: "Wheat 1544",
    image: wheat1544,
    slug:"wheat-1544",
    description:
      "Wheat 1544 is a premium high-yield wheat variety known for its strong grain structure, excellent productivity, and superior milling quality. It is widely preferred for commercial farming due to its consistent performance, healthy crop growth, and rich golden grains suitable for flour and food production industries.",
  },

  "wheat-1634": {
    name: "Wheat 1634",
    image: wheat1634,
    slug:"wheat-1634",
    description:
      "Wheat 1634 is an export-quality wheat variety recognized for its bold grains, natural freshness, and high resistance strength. This variety delivers excellent yield with uniform grain texture, making it ideal for bulk supply, international trading, and large-scale agricultural requirements.",
  },

  "wheat-1650": {
    name: "Wheat 1650",
    image: wheat1650,
    slug:"wheat-1650",
    description:
      "Wheat 1650 is a rich-quality wheat variety developed for reliable farming performance across different climatic conditions. Known for its balanced nutrition, healthy grain texture, and stable productivity, it is highly suitable for food processing and daily consumption purposes.",
  },

  "wheat-8759": {
    name: "Wheat 8759",
    image: wheat8759,
    slug:"wheat-8759",
    description:
      "Wheat 8759 is a high-demand wheat variety appreciated for its smooth texture, freshness, and premium grain finish. Its superior processing quality and refined grain consistency make it an excellent choice for bakery products, flour mills, and food manufacturing industries.",
  },
};

const ProductPage = () => {
  const { productId } = useParams();

  const product = productsData[productId];

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <section className="relative w-full h-[35vh] md:h-[35vh] mt-20 overflow-hidden">

        {/* Background Image */}
        <img
          src={aboutimg}
          alt="Wheat Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <h1 className="text-2xl md:text-7xl font-extrabold text-amber-400 leading-tight drop-shadow-2xl">
            {product?.name}
          </h1>

          <p className="text-gray-200 mt-6 max-w-3xl md:text-lg text-sm  md:leading-8">
            {product?.description}
          </p>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Product Content */}
          <div>
            <p className="text-yellow-500 font-semibold tracking-widest uppercase">
              Premium Wheat Collection
            </p>

            <h1 className="text-5xl font-bold text-gray-800 mt-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              {product.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-400 hover:bg-yellow-300 transition px-8 py-3 rounded-xl font-semibold text-black shadow-lg">
                Enquire Now
              </button>

             
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-white shadow-lg rounded-2xl p-5">
                <h3 className="font-bold text-xl text-gray-800">
                  High Quality
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Carefully processed premium wheat grains.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5">
                <h3 className="font-bold text-xl text-gray-800">
                  Organic Fresh
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Natural farming with rich nutrition value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default ProductPage;