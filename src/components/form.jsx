import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [icons, setIcons] = useState({});

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const response = await axios.get("/icons/contacIcons.json");
        const iconsData = response.data.icons.reduce((acc, icon) => {
          acc[icon.name] = icon.svg;
          return acc;
        }, {});
        setIcons(iconsData);
      } catch (error) {
        console.error("Error loading icons:", error);
      }
    };

    loadIcons();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    submissions.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Show success message
    alert("Message sent successfully!");
  };

  const createIcon = (iconSvg) => {
    if (!iconSvg) return null;
    return <div dangerouslySetInnerHTML={{ __html: iconSvg }} />;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {createIcon(icons.user)}
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Write your name"
          className="w-full pl-12 pr-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          required
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {createIcon(icons.email)}
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Write your email"
          className="w-full pl-12 pr-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          required
        />
      </div>

      {/* Message Input */}
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400">
          {createIcon(icons.edit)}
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="4"
          className="w-full pl-12 pr-4 py-3 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-2xl font-medium hover:bg-purple-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
}
