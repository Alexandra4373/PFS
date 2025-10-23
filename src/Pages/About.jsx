import React from "react";
import { FaShieldAlt, FaAward, FaHeart, FaLeaf } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About PFS</h1>
            <p className="text-lg text-green-100 max-w-2xl">
              Pneuma Food Scientifics - Your trusted partner in premium quality food
              products
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-green-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Pneuma Food Science (PFS), we are committed to providing
              premium quality, nutritious food products that enhance the
              well-being of our customers. Through advanced food processing
              technology and stringent quality control, we ensure every product
              meets the highest standards of safety and excellence.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaShieldAlt className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-800">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-sm">
                FDA certified processes ensuring the highest quality standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaAward className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-800">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                15+ years of expertise in food science and product development
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaHeart className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-800">
                Customer Focus
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated to customer satisfaction and health-conscious products
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaLeaf className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-800">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                Committed to sustainable practices and natural ingredients
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded on principles of scientific excellence and food
                  safety, Pneuma Food Science has been at the forefront of food
                  innovation in Ghana for over 15 years. What started as a food
                  safety consulting firm has evolved into a comprehensive food
                  science enterprise dedicated to producing premium quality food
                  products.
                </p>
                <p>
                  Our state-of-the-art commercial dehydration facility allows us
                  to preserve the natural goodness of fruits and grains,
                  transforming them into convenient, nutritious products that
                  fit modern lifestyles. Every product is developed with
                  meticulous attention to nutritional value, taste, and safety.
                </p>
                <p>
                  Today, PFS proudly serves customers across Ghana and beyond,
                  offering products that combine traditional nutrition with
                  modern convenience. Our FDA-certified processes and commitment
                  to quality assurance ensure that every product bearing the PFS
                  name meets the highest international standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-green-800">
              Certifications & Standards
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold">
                FDA Certified
              </div>
              <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold">
                GSA Compliant
              </div>
              <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold">
                ISO Standards
              </div>
              <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg font-semibold">
                HACCP Certified
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
