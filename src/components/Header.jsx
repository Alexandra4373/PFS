import React from 'react';
import likeImg from '../assets/like.png'; // Adjust path if needed
import cartImg from '../assets/cart.png'; // Adjust path if needed

function Header() {
    return (
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
                            <a href="/" className="hover:text-green-300 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-green-300 transition-colors duration-300">Buy</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-green-300 transition-colors duration-300">About Us</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-green-300 transition-colors duration-300">FAQs</a>
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
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;