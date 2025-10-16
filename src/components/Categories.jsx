import React from "react";

// Updated category data with only first three categories
const categories = [
  {
    id: 1,
    name: "Fresh Fruits",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop",
    items: "50+ Products",
    color: "from-orange-400 to-red-500",
    icon: "🍎",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
  },
  {
    id: 2,
    name: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1597362925123-aa8cbf4c85e9?w=400&h=300&fit=crop",
    items: "45+ Products",
    color: "from-green-500 to-emerald-600",
    icon: "🥦",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    id: 3,
    name: "Grains & Cereals",
    image:
      "https://images.unsplash.com/photo-1558961360-f95d0280a255?w=400&h=300&fit=crop",
    items: "30+ Products",
    color: "from-amber-500 to-yellow-600",
    icon: "🌾",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
  },
];

function Categories() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Shop by Category
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our wide range of fresh and organic products. From farm to
          your table, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
          >
            {/* Category Header with Icon */}
            <div className={`${category.bgColor} p-4`}>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
              ></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-medium">
                  {category.items}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                  Popular
                </span>
              </div>

              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* View All Categories Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          View All Categories
        </button>
      </div>
    </section>
  );
}

export default Categories;
