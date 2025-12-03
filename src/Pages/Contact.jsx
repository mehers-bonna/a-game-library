import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-10/12 mx-auto py-16">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-10"
      >
        Contact Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl mx-auto"
      >
        <p className="text-center text-gray-500 mb-8">
          Have questions or suggestions? We'd love to hear from you 👋
        </p>

        <form className="space-y-6">
          {/* NAME */}
          <div>
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
