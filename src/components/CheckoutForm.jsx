import React, { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    payment: "Pay on Delivery",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((v) => !v)) {
      alert("Please fill all fields!");
    } else {
      alert("Order placed successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-3">Billing Information</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City / Region"
        className="w-full p-3 border rounded-lg"
        required
      />

      <div>
        <label className="block font-medium mb-2">Payment Method</label>
        <select
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option>Pay on Delivery</option>
          <option>Card Payment</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
