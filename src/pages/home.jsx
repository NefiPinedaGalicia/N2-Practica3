import React from "react";
import GridHome from "../components/gridHome";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#faf6ff] to-[#e8f0ff]">
      <div className="flex w-full">
        <div className="w-2/5 py-8 pl-8 flex items-center justify-end">
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold text-[#6366f1] mb-2 tracking-tight">
              Bootstrap 5 theme
            </h1>
            <h2 className="text-3xl text-gray-700 font-medium mb-4">
              crafted by{" "}
              <span className="font-bold text-gray-800">ThemeWagon</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm text-justify">
              ThemeWagon offers a wide array of category-oriented Free and
              Premium Bootstrap HTML Templates and Themes.
            </p>
            <button className="px-6 py-2 text-white font-semibold rounded-md shadow-md transition-all bg-gradient-to-r from-[#6d5dfc] to-[#56a3ff] hover:opacity-90">
              Check Demo
            </button>
          </div>
        </div>
        <div className="w-3/5">
          <img
            src="/images/home/personas.png"
            alt="Personas"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <GridHome />
    </div>
  );
}
