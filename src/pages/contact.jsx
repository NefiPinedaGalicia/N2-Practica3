import React, { useState, useEffect } from "react";
import Form from "../components/form";
import axios from "axios";

export default function Contact() {
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

  const createIcon = (iconSvg) => {
    if (!iconSvg) return null;
    return <div dangerouslySetInnerHTML={{ __html: iconSvg }} />;
  };

  const contactInfo = [
    {
      type: "phone",
      text: "+880124332334",
      icon: icons.phone,
    },
    {
      type: "email",
      text: "something@email.com",
      icon: icons.email,
    },
    {
      type: "location",
      text: "43/A. Spooner Street, St Lawrence, Virginia, Texas",
      icon: icons.location,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#f5f7ff] to-[#fff9f5] flex flex-col items-center py-10 px-4 relative">
      <div className="absolute top-45/100 transform -translate-y-1/2 right-0 w-70/100 bg-[#e5e4f8] rounded-l-full z-0 h-120"></div>

      {/* Título centrado */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Contact Us
        </h2>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-2 gap-12 relative z-10">
        <div className="bg-white/80 rounded-4xl p-8 shadow-lg">
          <Form />
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#6d5dfc] to-[#56a3ff] rounded-xl p-2 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <div className="text-white size-5 flex items-center justify-center">
                    {createIcon(item.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 capitalize">
                    {item.type}
                  </h3>
                  <p className="text-gray-600">
                    {item.type === "location" ? (
                      <>
                        43/A. Spooner Street,
                        <br />
                        St Lawrence, Virginia,
                        <br />
                        Texas
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
