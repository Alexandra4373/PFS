import React, { useState } from "react";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: "Reviews" },
  ];

  const tabContent = {
    description: (
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          About this product
        </h3>
        <p className="text-gray-700 mb-6">
          {product.longDescription ||
            `Our premium ${product.name} is carefully crafted using the finest ingredients to deliver exceptional quality and taste. Each batch is thoroughly tested to ensure it meets our high standards for purity and nutritional value.`}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Rich in essential nutrients
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                100% natural ingredients
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No artificial additives
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Environmentally friendly packaging
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Usage Instructions
            </h4>
            <p className="text-gray-700">
              Follow the recommended usage instructions for best results. Store
              in a cool, dry place away from direct sunlight.
            </p>
          </div>
        </div>
      </div>
    ),

    specifications: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Product Specifications
        </h3>

        <div className="bg-gray-50 rounded-lg p-6">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Product Name
                </td>
                <td className="py-3 px-4 text-gray-600">{product.name}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Weight
                </td>
                <td className="py-3 px-4 text-gray-600">500g</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Ingredients
                </td>
                <td className="py-3 px-4 text-gray-600">
                  100% Natural {product.name}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Shelf Life
                </td>
                <td className="py-3 px-4 text-gray-600">12 months</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Storage
                </td>
                <td className="py-3 px-4 text-gray-600">Cool, dry place</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-gray-700">
                  Country of Origin
                </td>
                <td className="py-3 px-4 text-gray-600">Ghana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),

    reviews: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Customer Reviews
        </h3>

        {/* Review Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">4.8</div>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">Based on 24 reviews</p>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-4">{rating}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${rating === 5 ? "80%" : rating === 4 ? "15%" : rating === 3 ? "5%" : "0%"}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Reviews */}
        <div className="space-y-4">
          {[
            {
              name: "Kwame A.",
              rating: 5,
              comment: "Excellent quality! My family loves this product.",
              date: "2 weeks ago",
            },
            {
              name: "Ama S.",
              rating: 4,
              comment: "Good value for money. Will buy again.",
              date: "1 month ago",
            },
            {
              name: "Kofi M.",
              rating: 5,
              comment: "Fresh and natural. Highly recommended!",
              date: "2 months ago",
            },
          ].map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {review.name}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{review.comment}</p>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="mb-12">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 font-semibold text-lg border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">{tabContent[activeTab]}</div>
    </div>
  );
}

export default ProductTabs;
