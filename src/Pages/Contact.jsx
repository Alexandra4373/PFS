import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-green-100 max-w-2xl">
              Have questions? We're here to help. Reach out to us and we'll
              respond as soon as possible.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-green-800">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Whether you have questions about our products, need assistance
                  with an order, or want to learn more about our services, our
                  team is ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 flex-shrink-0">
                    <FaMapMarkerAlt className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-green-800">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Zibra Street, Pokuase
                      <br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 flex-shrink-0">
                    <FaPhone className="h-5 w-5 text-green-700 transform -rotate-270" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-green-800">Phone</h3>
                    <p className="text-gray-600">
                      +233 54 206 8305
                      <br />
                      +233 20 793 5696
                      <br />
                      +233 50 338 6203
                      <br />
                      +233 24 104 3139
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 flex-shrink-0">
                    <FaEnvelope className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-green-800">Email</h3>
                    <p className="text-gray-600 break-all">
                      pneumaconsult@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 flex-shrink-0">
                    <FaClock className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-green-800">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md border border-green-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-800">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-green-800"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full border border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 rounded-md p-2 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-green-800"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full border border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 rounded-md p-2 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-green-800"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+233 XX XXX XXXX"
                    className="w-full border border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 rounded-md p-2 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-green-800"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full border border-green-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 rounded-md p-2 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-200 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
