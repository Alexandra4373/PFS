import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import likeImg from "../assets/like.png";
// import cartImg from "../assets/cart.png";
// import userImg from "../assets/user.png";
import { useCart } from "../hooks/useCart";
import logo from "../assets/logo.png";
// import { ShoppingCart, Menu, X, Search } from "lucide-react";

function Header() {
  // const [showLogin, setShowLogin] = useState(false);
  // const [activeTab, setActiveTab] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearch, setMobileSearch] = useState("");
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const navigate = useNavigate();

  //  Desktop Search Function
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  //  Mobile Search Function
  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileSearch.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(mobileSearch)}`);
      setMobileSearch("");
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-white-700 text-green shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="PFS Products Logo" className="w-10 h-10" />
            <span className="font-bold text-2xl tracking-wide">
              PFS Products
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="hover:text-green-300 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-green-300 transition-colors duration-300 font-medium"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="hover:text-green-300 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-300 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>

            {/*  Search Bar (Desktop) */}
            <form onSubmit={handleSearch} className="relative mx-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-green-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-300 group"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold border-2 border-white min-w-[1.25rem] text-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 focus:outline-none p-2 rounded-lg hover:bg-green-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-50 px-6 py-4 space-y-4 border-t border-green-200">
            <Link
              to="/"
              className="block py-2 hover:text-green-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 hover:text-green-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-green-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:text-green-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* ✅ Mobile Search */}
            <form onSubmit={handleMobileSearch} className="pt-2 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={mobileSearch}
                onChange={(e) => setMobileSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-3 text-gray-400 hover:text-green-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            {/* Mobile Cart */}
            <div className="pt-2">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 py-2 px-4 bg-green-600 hover:bg-green-800 rounded-lg transition-colors font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Login/Sign Up Modal */}
      {/* {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 animate-scale-in">
            <div className="flex justify-center mb-6 overflow-hidden rounded-lg">
              <button
                className={`flex-1 px-6 py-3 font-semibold transition-colors ${
                  activeTab === "login" 
                    ? "bg-green-700 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 px-6 py-3 font-semibold transition-colors ${
                  activeTab === "signup" 
                    ? "bg-green-700 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Create Account
              </button>
            </div>

            {activeTab === "login" ? (
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors mt-2"
                >
                  Login
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors mt-2"
                >
                  Create Account
                </button>
              </form>
            )}

            <button
              className="w-full mt-4 text-gray-500 hover:text-gray-700 transition-colors py-2"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Header;
