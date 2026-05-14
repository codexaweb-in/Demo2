import React from "react";
import aboutImg from "../assets/about.png";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            {/* Banner Section */}
            <section className="relative w-full h-[45vh] md:h-[45vh] mt-20 overflow-hidden">

                {/* Background Image */}
                <img
                    src={aboutImg}
                    alt="Wheat Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

                    <p className="text-amber-300 md:text-2xl text-sm uppercase tracking-[5px] font-semibold mb-4">
                        About KAPEESH SEEDS PLANT
                    </p>

                    <h1 className="text-2xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
                        Premium Indian Wheat <br />
                        <span className="text-amber-400">
                            Delivered Worldwide
                        </span>
                    </h1>

                    <p className="text-gray-200 mt-6 max-w-3xl md:text-lg text-sm  md:leading-8">
                        Supplying high-quality wheat grains with purity,
                        nutrition, and trusted export standards from India to global markets 🌾
                    </p>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
            </section>
            <section
                id="about"
                className="w-full min-h-screen bg-gradient-to-b from-white via-gray-100 to-white py-24 px-6 md:px-16 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="relative group">

                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-3xl"></div>

                        <img
                            src={aboutImg}
                            alt="Fresh Litchis"
                            className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition duration-500"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 left-8 bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
                            <h2 className="text-3xl font-bold text-amber-400">
                                3+
                            </h2>

                            <p className="text-gray-900 text-sm">
                                Years Of Export Excellence
                            </p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-yellow-400 uppercase tracking-[5px] font-semibold mb-4">
                            About Company
                        </p>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                            Delivering Freshness <br />
                            <span className="text-amber-500">
                                Across The Globe
                            </span>
                        </h1>

                        <p className="text-gray-900 text-lg leading-relaxed mt-8">
                            Kapeesh Seeds Plant specializes in exporting premium quality
                            Indian wheat and agricultural products to global markets.
                            We ensure purity, hygiene, quality packaging, and timely
                            delivery with international export standards.
                        </p>

                        <p className="text-gray-900 text-lg leading-relaxed mt-6">
                            Our mission is to deliver nutritious and high-grade wheat
                            products worldwide while building long-term trust through
                            quality service and transparent trade.
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-12">

                            {/* Card 1 */}
                            <div className="group relative bg-white border border-amber-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-200/30 blur-3xl rounded-full"></div>

                                <div className="relative z-10">


                                    <h3 className="text-[#2b1a00] text-2xl font-bold mb-3 group-hover:text-amber-700 transition">
                                        Premium Quality
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-7">
                                        Premium export-grade wheat with high purity and rich nutritional value.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-white border border-amber-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-200/30 blur-3xl rounded-full"></div>

                                <div className="relative z-10">


                                    <h3 className="text-[#2b1a00] text-2xl font-bold mb-3 group-hover:text-amber-700 transition">
                                        Global Shipping
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-7">
                                        Reliable worldwide shipping with secure and timely export delivery.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative bg-white border border-amber-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-200/30 blur-3xl rounded-full"></div>

                                <div className="relative z-10">


                                    <h3 className="text-[#2b1a00] text-2xl font-bold mb-3 group-hover:text-amber-700 transition">
                                        Hygienic Packaging
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-7">
                                        Carefully packed wheat products maintaining hygiene and freshness.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="group relative bg-white border border-amber-100 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">

                                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-200/30 blur-3xl rounded-full"></div>

                                <div className="relative z-10">


                                    <h3 className="text-[#2b1a00] text-2xl font-bold mb-3 group-hover:text-amber-700 transition">
                                        Trusted Service
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-7">
                                        Strong global partnerships built on trust, quality, and transparency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            onClick={() =>
                                document.querySelector("#contact")?.scrollIntoView({
                                    behavior: "smoo th",
                                })
                            }
                            className="mt-10 bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition duration-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
            <Services />
            <Contact />
            <Footer />
        </>
    );
};

export default AboutPage;