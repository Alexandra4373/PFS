import React, { useState } from "react";
import ShopHeader from "../components/ShopHeader";
import SidebarFilters from "../components/SidebarFilters";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const productsPerPage = 8;

  // Apply filters
  const applyFilters = (categories, price, sort) => {
    let filtered = [...products];

    // Filter by category
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.some((cat) =>
          product.name.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Filter by price
    filtered = filtered.filter((product) => {
      const productPrice = parseFloat(
        product.salePrice.replace(/[^0-9.]/g, "")
      );
      return productPrice >= price.min && productPrice <= price.max;
    });

    // Sort products
    if (sort === "price-low") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.salePrice.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.salePrice.replace(/[^0-9.]/g, ""));
        return priceA - priceB;
      });
    } else if (sort === "price-high") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.salePrice.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.salePrice.replace(/[^0-9.]/g, ""));
        return priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newCategories);
    applyFilters(newCategories, priceRange, sortBy);
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    applyFilters(selectedCategories, newPriceRange, sortBy);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    applyFilters(selectedCategories, priceRange, newSort);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 100 });
    setSortBy("default");
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden w-full bg-green-700 text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-center gap-2"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Filters
            </button>

            <div className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
              <SidebarFilters
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                onClearFilters={clearFilters}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{indexOfFirstProduct + 1}</span>{" "}
                -
                <span className="font-semibold">
                  {" "}
                  {Math.min(indexOfLastProduct, filteredProducts.length)}
                </span>{" "}
                of
                <span className="font-semibold">
                  {" "}
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
            </div>

            {currentProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-24 h-24 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentProducts.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-green-700 hover:bg-green-50 border border-green-700"
                      } transition`}
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-lg transition ${
                          currentPage === index + 1
                            ? "bg-green-700 text-white"
                            : "bg-white text-green-700 hover:bg-green-50 border border-green-700"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-green-700 hover:bg-green-50 border border-green-700"
                      } transition`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
