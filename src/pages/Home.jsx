import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from '../components/About'
import Services from "../components/Services"
import Products from "../components/Products"
import CTA from "../components/CTA"
import Testimonials from "../components/Testimonials"
import Contact from '../components/Contact'
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Products />
            <CTA />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
