import React from "react";

import wheat1544 from "../assets/wheat1544.jpg";
import wheat1634 from "../assets/wheat1634.jpg";
import wheat1650 from "../assets/wheat1650.jpg";
import wheat8759 from "../assets/wheat8759.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Wheat 1544",
      slug: "wheat-1544",
      sub: "High-yield premium wheat variety with strong grain structure, rich protein content, and excellent milling quality suitable for flour production and bulk export.",
      img: wheat1544,
    },

    {
      title: "Wheat 1634",
      slug: "wheat-1634",
      sub: "Export-quality wheat known for bold golden grains, superior purity, and long shelf life, ideal for international trading and large-scale supply.",
      img: wheat1634,
    },

    {
      title: "Wheat 1650",
      slug: "wheat-1650",
      sub: "Reliable and nutrient-rich wheat variety with balanced texture and stable productivity, perfect for food processing and daily consumption industries.",
      img: wheat1650,
    },

    {
      title: "Wheat 8759",
      slug: "wheat-8759",
      sub: "Premium fine-grain wheat with smooth texture and refined quality, widely preferred for bakery products, flour mills, and global food markets.",
      img: wheat8759,
    },
  ];

  return (
    <section
      id="products"
      className="w-full py-20 bg-gradient-to-b from-[#fff9f0] to-[#f7efe4]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#9c5a12] font-semibold uppercase tracking-[4px] mb-3">
            Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Premium Quality Products From India
          </h2>

          <p className="text-gray-600 text-lg">
            We export fresh agricultural products, spices, grains and natural
            products worldwide with trusted quality standards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Link to={`/products/${item.slug}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.sub}</p>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
