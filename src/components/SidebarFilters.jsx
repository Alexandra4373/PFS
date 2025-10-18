import React from "react";

function SidebarFilters({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
  onClearFilters,
}) {
  // Available categories for filtering
  const categories = [
    { id: "mango", name: "Mango", icon: "🥭" },
    { id: "porridge", name: "Porridge", icon: "🥣" },
    { id: "fibre", name: "Fibre", icon: "🌾" },
    { id: "rice", name: "Rice", icon: "🍚" },
    { id: "instant", name: "Instant", icon: "⚡" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-green-100">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-green-700 hover:text-green-800 font-semibold transition hover:underline"
        >
          Clear Filters
        </button>
      </div>

      {/* Categories Section */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          Categories
        </h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center cursor-pointer group hover:bg-green-50 p-2 rounded-lg transition"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => onCategoryChange(category.name)}
                className="w-4 h-4 text-green-700 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <span className="ml-3 text-gray-700 group-hover:text-green-700 transition flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </span>
              {selectedCategories.includes(category.name) && (
                <svg
                  className="w-4 h-4 ml-auto text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
          Price Range (GH₵)
        </h4>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block font-medium">
              Minimum Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                GH₵
              </span>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  onPriceChange({ ...priceRange, min: Number(e.target.value) })
                }
                className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                min="0"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-8 h-0.5 bg-gray-300"></div>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block font-medium">
              Maximum Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                GH₵
              </span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  onPriceChange({ ...priceRange, max: Number(e.target.value) })
                }
                className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                min="0"
                placeholder="100"
              />
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-700 font-medium text-center">
              GH₵{priceRange.min} - GH₵{priceRange.max}
            </p>
          </div>
        </div>
      </div>

      {/* Sort By Section */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
          </svg>
          Sort By
        </h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white cursor-pointer hover:border-green-500 transition"
        >
          <option value="default">Default Sorting</option>
          <option value="price-low">💰 Price: Low to High</option>
          <option value="price-high">💎 Price: High to Low</option>
        </select>
      </div>

      {/* Active Filters Badge */}
      {(selectedCategories.length > 0 ||
        sortBy !== "default" ||
        priceRange.min > 0 ||
        priceRange.max < 100) && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Active Filters
              </span>
              <span className="bg-green-700 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                {selectedCategories.length + (sortBy !== "default" ? 1 : 0)}
              </span>
            </div>
            {selectedCategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1 bg-white text-green-700 text-xs px-2 py-1 rounded-full border border-green-200"
                  >
                    {cat}
                    <button
                      onClick={() => onCategoryChange(cat)}
                      className="hover:text-red-600 transition"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
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
        Apply Filters
      </button>
    </div>
  );
}

export default SidebarFilters;
