import React from "react";

export default function TableFooter() {
  return (
    <div className="overflow-x-auto gap-4">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="font-semibold">
            <th className="pb-4 pr-8">About</th>
            <th className="pb-4 pr-8">Resources</th>
            <th className="pb-4 pr-8">Team</th>
            <th className="pb-4 pr-8">Blog</th>
          </tr>
        </thead>
        <tbody className="align-top">
          <tr>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Prices
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Terms
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Developer
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                CEO
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                About
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Help
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Designer
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Lifestyle
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Services
              </a>
            </td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Privacy
              </a>
            </td>
            <td className="py-1"></td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Article
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Career
              </a>
            </td>
            <td className="py-1"></td>
            <td className="py-1"></td>
            <td className="py-1">
              <a href="#" className="hover:text-indigo-500">
                Tech
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
