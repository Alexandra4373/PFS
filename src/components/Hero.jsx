import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-green-200 via-green-100 to-green-300">
      {/* <img src="/assets/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" /> */}
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fade-in">
          Welcome to PFS Store
        </h1>
        <p className="text-lg md:text-xl text-green-700 mb-8 animate-fade-in delay-100">
          Discover our range of natural and healthy products!
        </p>
        <Link
          to="/products"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-800 transition transform hover:scale-105 animate-fade-in"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
