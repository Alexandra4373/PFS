import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import likeImg from '../assets/like.png';
import cartImg from '../assets/cart.png';
import userImg from '../assets/user.png';

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'

    return (
        <>
        <header className="bg-green-700 text-white shadow animate-fade-in">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-2xl tracking-wide transition-colors duration-300 hover:text-green-300 cursor-pointer">
                        PFS Products
                    </span>
                </div>
                <nav>
                    <ul className="text-white hidden sm:flex gap-5 cursor-pointer items-center">
                        <li>
                            <Link to="/" className="hover:text-green-300 transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-green-300 transition-colors duration-300">Buy</Link>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-green-300 transition-colors duration-300">About Us</a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-green-300 transition-colors duration-300">FAQs</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-green-300 transition-colors duration-300">Contact Us</a>
                        </li>
                        <li className="group ml-4">
                            <button className="bg-transparent p-1 rounded-full hover:bg-red-100 transition">
                                <img src={likeImg} alt="Like" className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                            </button>
                        </li>
                        <li className="group ml-2">
                            <button className="bg-green-600 p-1 rounded-full hover:bg-green-800 transition">
                                <img src={cartImg} alt="Cart" className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                            </button>
                        </li>
                        <li className="group ml-2">
                            <button
                                className="bg-transparent p-1 rounded-full hover:bg-gray-200 transition"
                                onClick={() => setShowLogin(true)}
                            >
                                <img src={userImg} alt="User" className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        {/* Login/Sign Up Popup */}
        {showLogin && (
    <div className="fixed inset-0 flex items-center justify-center z-50 cursor:pointer"
         style={{
             background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)",
             backdropFilter: "blur(2px)"
         }}>
        <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg p-8 w-full max-w-sm animate-fade-in">
            <div className="flex justify-center mb-6">
                <button
                    className={`px-4 py-2 font-semibold rounded-l ${activeTab === 'login' ? 'bg-green-700 text-white' : 'bg-gray-100 text-green-700'}`}
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button
                    className={`px-4 py-2 font-semibold rounded-r ${activeTab === 'signup' ? 'bg-green-700 text-white' : 'bg-gray-100 text-green-700'}`}
                    onClick={() => setActiveTab('signup')}
                >
                    Create Account
                </button>
            </div>
            {activeTab === 'login' ? (
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