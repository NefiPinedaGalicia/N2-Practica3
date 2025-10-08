import React from "react";

const services = [
  {
    img: "/images/services/icon1.png",
    title: "Send Texts Instantly",
    description:
      "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
  },
  {
    img: "/images/services/icon2.png",
    title: "Better Organized",
    description:
      "Latest technology and experienced guidance, trained HR specialists to keep updated.",
  },
  {
    img: "/images/services/icon3.png",
    title: "Analytical Statistics",
    description:
      "Messages, real-time reminders, memos, and many more will keep your team in sync.",
  },
];

export default function Services() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#f5f7ff] to-[#fff9f5] flex flex-col items-center justify-start py-10">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Service</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We offer youth with chances for career development in their practice.
          We also support a wide range of services to ensure client
          satisfaction.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8 max-w-6xl w-full h-120 px-6 ">
        {services.map(({ img, title, description }, i) => (
          <div
            key={i}
            className="group bg-transparent rounded-3xl shadow-md p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/30 justify-center h-full"
          >
            {/* Imagen centrada */}
            <div className="flex justify-center w-full h-[50%]">
              <img src={img} alt={title} className="w-30 h-30" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {title}
            </h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              {description}
            </p>

            <button className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              Learn More
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
