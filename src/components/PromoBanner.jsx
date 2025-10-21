import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset when timer ends
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden border border-green-500">
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-3">
              <div className="bg-yellow-400 rounded-full p-1 mr-2">
                <svg
                  className="w-4 h-4 text-green-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-green-100 font-semibold text-sm">
                Limited Time Offer
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Free Shipping! 🚚
            </h2>
            <p className="text-green-100 text-lg mb-6">
              On all orders over{" "}
              <span className="font-bold text-white text-xl">₵200</span>
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center lg:justify-start space-x-3 mb-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-90 rounded-lg px-3 py-2 min-w-[50px]">
                  <span className="text-green-800 font-bold text-lg">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="text-green-100 text-xs mt-1 block">Hours</span>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-90 rounded-lg px-3 py-2 min-w-[50px]">
                  <span className="text-green-800 font-bold text-lg">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="text-green-100 text-xs mt-1 block">
                  Minutes
                </span>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-90 rounded-lg px-3 py-2 min-w-[50px]">
                  <span className="text-green-800 font-bold text-lg">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="text-green-100 text-xs mt-1 block">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Shop Now & Save
            </Link>
            <p className="text-green-100 text-sm mt-2 hidden lg:block">
              Limited spots available!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
