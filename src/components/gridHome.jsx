import React from "react";

const imagePaths = [
  "/images/home/google.png",
  "/images/home/netflix.png",
  "/images/home/microsoft.png",
  "/images/home/mailbuster.png",
  "/images/home/themewagon.png",
];

export default function GridHome() {
  return (
    <div className="py-16">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Gradient border simulation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="grid grid-cols-5 gap-12 items-center pt-12">
          {imagePaths.map((path, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={path}
                alt={`logo ${index + 1}`}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
