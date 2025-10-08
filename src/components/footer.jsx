import React from "react";
import TableFooter from "./tableFooter";
import SocialMediaFooter from "./socialMediaFooter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#faf6ff] to-[#e8f0ff] text-[#85868f] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="md:w-3/5 w-full">
            <TableFooter />
          </div>
          <div className="md:w-2/5 w-full">
            <SocialMediaFooter />
          </div>
        </div>

        <div className="border-t border-indigo-100 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>
            All rights Reserved ©{" "}
            <span className="font-medium">Your Company, 2025</span>
          </div>
          <div className="mt-3 md:mt-0">
            Made with <span className="text-red-400">♥</span> by{" "}
            <span className="font-medium">NefiPineda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
