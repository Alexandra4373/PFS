import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Company Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img src={logo} alt="PFS Logo" className="w-16 mr-2" />
            <h3 className="text-lg font-semibold">PFS Products</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            Pneuma Food Scientifics offers a range of science-driven, natural,
            and healthy food products. Our formulations are developed through
            research and innovation to ensure quality, safety, and nutritional
            value for consumers and the food industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-green-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-green-300 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-green-300 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-green-300" /> Zibra Street,
              Pokuase, Accra
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-green-300 transform -rotate-270" />
              <span dir="ltr">+233 24 104 3139</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-green-300" /> pneumaconsult@gmail.com
            </li>
          </ul>
          <p className="text-secondary-foreground/60 text-sm mt-4">
            Mon - Fri: 9:00 AM - 5:00 PM
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-900 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Pneuma Food Scientifics. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
