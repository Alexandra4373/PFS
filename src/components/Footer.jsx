import React from 'react';

function Footer () {
    return (
        <footer className="bg-green-700 text-white mt-12">
            <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="mb-4 md:mb-0 text-center md:text-left text-sm">
                    &copy; {new Date().getFullYear()} PFS. All rights reserved.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm">
                    <li><a href="/home" className="hover:text-green-300 transition">Home</a></li>
                    <li><a href="/buy" className="hover:text-green-300 transition">Buy</a></li>
                    <li><a href="/about" className="hover:text-green-300 transition">About Us</a></li>
                    <li><a href="/faq" className="hover:text-green-300 transition">FAQs</a></li>
                    <li><a href="/contact" className="hover:text-green-300 transition">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;