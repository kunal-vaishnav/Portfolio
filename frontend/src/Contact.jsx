import form from "./assets/form.jpg";
import React, { useState } from "react";
import API from "./Connect.js"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message Sent! We will get back to you soon.");
    const fd = new FormData(event.target);
    const recruiterData = Object.fromEntries(fd.entries());
    console.log(recruiterData);
    fetch(API+"formdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form: {
          recruiter: recruiterData,
        },
      }),
    });
  };

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white">
      {/* Left Side - Contact Form */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-center">CONTACT</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-500 text-black font-bold py-3 px-4 rounded-lg border border-white shadow-lg transition duration-300 mt-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Full-Screen Image */}
      <div className="w-1/2 h-screen">
        <img src={form} alt="Contact" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Contact;
