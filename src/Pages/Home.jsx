// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import PromoBanner from "../components/PromoBanner";
import Categories from "../components/Categories";

function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}

export default Home;
