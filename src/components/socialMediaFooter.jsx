import React from "react";
import FollowIcons from "./followIcons";

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1bce5" className="absolute left-3 top-1/2 -translate-y-1/2">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
);

export default function SocialMediaFooter() {
  return (
    <div className="flex flex-col gap-6 h-full justify-between items-start">
      <div>
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div>
          <FollowIcons />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start w-full">
        <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
        <div className="relative w-full flex items-center">
          <EmailIcon />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none text-sm text-gray-700 bg-white border border-indigo-200 rounded-full py-1.5 shadow-sm pl-10 pr-10"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-gradient-to-r from-[#6d5dfc] to-[#56a3ff] text-white text-xs rounded-full hover:opacity-90 transition">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}