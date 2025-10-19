import React, { useState } from "react";
import { Link } from "react-router-dom";
// import likeImg from "../assets/like.png";
import cartImg from "../assets/cart.png";
// import userImg from "../assets/user.png";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-green-700 text-white shadow animate-fade-in">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}

          <div className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-2xl tracking-wide transition-colors duration-300 hover:text-green-300 cursor-pointer">
              PFS Products
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex gap-5 items-center">
            <Link
              to="/"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Shop
            </Link>
            <a
              href="/about"
              className="hover:text-green-300 transition-colors duration-300"
            >
              About
            </a>
            <Link
              to="/contact"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Contact
            </Link>
            {/* <a
              href="/contact"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Cart
            </a> */}

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-8">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              />
            </div>
            {/* Like Button */}
            {/* <button className="bg-transparent p-1 rounded-full hover:bg-red-100 transition">
              <img
                src={likeImg}
                alt="Like"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-125"
              />
            </button> */}
            {/* Cart with badge */}
            <div className="relative group ml-2">
              <button className=" p-1 rounded-full bg-green-600 hover:bg-green-800 transition">
                <img
                  src={cartImg}
                  alt="Cart"
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-125"
                />
              </button>
              {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold border-2 border-white">
                2
              </span> */}
            </div>
            {/* <button
              className="bg-transparent p-1 rounded-full hover:bg-gray-200 transition ml-2"
              onClick={() => setShowLogin(true)}
            >
              <img
                src={userImg}
                alt="User"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-125"
              />
            </button> */}
          </nav>
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden ml-4 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-green-800 px-6 py-4 space-y-3">
            <Link
              to="/"
              className="block hover:text-green-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-green-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <a href="/about" className="block hover:text-green-300">
              About
            </a>
            <a href="/faq" className="block hover:text-green-300">
              Contact
            </a>
            {/* <a href="/contact" className="block hover:text-green-300">
              Cart
            </a> */}
            <div className="flex gap-4 mt-3">
              {/* <button className="bg-transparent p-1 rounded-full hover:bg-red-100 transition">
                <img src={likeImg} alt="Like" className="w-6 h-6" />
              </button> */}
              <div className="relative">
                <Link
                  to="/cart"
                  className="bg-green-600 p-1 rounded-full hover:bg-green-800 transition inline-block"
                >
                  <img src={cartImg} alt="Cart" className="w-6 h-6" />
                </Link>

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              {/* <button
                className="bg-transparent p-1 rounded-full hover:bg-gray-200 transition"
                onClick={() => {
                  setShowLogin(true);
                  setMobileMenuOpen(false);
                }}
              >
                <img src={userImg} alt="User" className="w-6 h-6" />
              </button> */}
            </div>
          </div>
        )}
      </header>
      {/* Login/Sign Up Popup */}
      {showLogin && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg p-8 w-full max-w-sm animate-fade-in">
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 font-semibold rounded-l ${activeTab === "login" ? "bg-green-700 text-white" : "bg-gray-100 text-green-700"}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 font-semibold rounded-r ${activeTab === "signup" ? "bg-green-700 text-white" : "bg-gray-100 text-green-700"}`}
                onClick={() => setActiveTab("signup")}
              >
                Create Account
              </button>
            </div>
            {activeTab === "login" ? (
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                >
                  Login
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                >
                  Create Account
                </button>
              </form>
            )}
            <button
              className="mt-4 text-gray-500 hover:text-green-700 transition"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
