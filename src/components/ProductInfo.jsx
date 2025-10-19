import React from "react";

function ProductInfo({ product }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
        {product.name}
      </h1>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {renderStars(product.rating || 4.5)}
        </div>
        <span className="text-sm text-gray-600">
          ({product.reviews || 24} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-green-700">
          {product.price}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-gray-500 line-through">
            {product.originalPrice}
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-semibold">
            Save {(product.originalPrice - product.price).toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {product.description ||
            `Premium quality ${product.name.toLowerCase()} made from the finest natural ingredients. Perfect for health-conscious individuals looking for nutritious and delicious options.`}
        </p>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
        ></div>
        <span
          className={`font-semibold ${product.inStock ? "text-green-700" : "text-red-700"}`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        {product.inStock && (
          <span className="text-sm text-gray-600">• Ready to ship</span>
        )}
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-lg">🌱</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">100% Natural</p>
            <p className="text-sm text-gray-600">No preservatives</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-lg">🚚</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Free Shipping</p>
            <p className="text-sm text-gray-600">Over GH₵200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
