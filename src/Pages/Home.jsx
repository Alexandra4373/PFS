// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}

export default Home;
