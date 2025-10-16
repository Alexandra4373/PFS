import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Naa Atswei",
    review:
      "I absolutely love the quality of these products! Fast delivery and amazing customer support.",
    // image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Chrisbriana",
    review:
      "Great shopping experience — user-friendly site and wonderful discounts. Highly recommend!",
    // image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Kofi Sasu",
    review:
      "Their customer service went above and beyond to help me with my order. Five stars!",
    // image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg"
          >
            {/* <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-600"
            /> */}
            <p className="text-gray-600 italic mb-4">“{t.review}”</p>
            <h4 className="font-semibold text-green-700">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
