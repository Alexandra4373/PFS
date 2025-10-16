import React, { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email address.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("✅ Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter to receive the latest news and special
          offers.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-700 font-medium">{message}</p>
        )}
      </div>
    </section>
  );
}

export default NewsletterSignup;
