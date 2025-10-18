import React, { useState } from "react";

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Use product images or fallback to a placeholder
  const images = product.images || [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&h=500&fit=crop",
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-80 lg:h-96 object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`bg-white rounded-lg border-2 overflow-hidden transition-all duration-200 hover:border-green-500 ${
              selectedImage === index
                ? "border-green-600 shadow-md"
                : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
