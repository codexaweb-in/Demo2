import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import wheat1544 from "../assets/wheat1544.jpg";
import wheat1634 from "../assets/wheat1634.jpg";
import wheat1650 from "../assets/wheat1650.jpg";
import wheat8759 from "../assets/wheat8759.jpg";
import { Link } from "react-router-dom";

export default function WheatLandingPage() {

  const data = [
    {
      title: "Wheat 1544",
      image: wheat1544,
      slug: "wheat-1544",
    },

    {
      title: "Wheat 1634",
      image: wheat1634,
      slug: "wheat-1634",
    },

    {
      title: "Wheat 1650",
      image: wheat1650,
      slug: "wheat-1650",
    },

    {
      title: "Wheat 8759",
      image: wheat8759,
      slug: "wheat-8759",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#fffaf3] text-gray-800 overflow-hidden">


        {/* Products Section */}
        <section className="py-44 px-6 bg-gradient-to-b from-[#fff7ea] to-[#fffaf3]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[5px] text-[#9c5a12] font-semibold mb-4">
                Our Wheat Varieties
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                Premium Wheat Collection
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
                >
                  <Link to={`/products/${item.slug}`}>
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                  </Link>


                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
   <Link to={`/products/${item.slug}`}>
          <button className="mt-5 bg-amber-400 hover:bg-amber-300 text-black px-6 py-3 rounded-xl font-semibold transition duration-300">
            View Details
          </button>
        </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

     

        
      </div>
      <Contact />
      <Footer />
    </>

  );
}
