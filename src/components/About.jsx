import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gradient-to-b from-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-[50vh] rounded-3xl shadow-xl object-contain"
          />

          <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white px-6 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-[5px] mb-3">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Company Name 
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a dedicated export company specializing in high-quality wheat and
            agricultural products sourced directly from trusted Indian farms. Our focus
            is on delivering purity, consistency, and value to buyers across international markets.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From careful sourcing to final delivery, we ensure every step meets global
            standards. With a commitment to transparency and long-term relationships,
            we aim to become a reliable partner for businesses worldwide.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              🌾 Export Quality Wheat
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              🌍 Global Supply Network
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              🚚 Timely & Secure Delivery
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              🤝 Long-Term Business Support
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
