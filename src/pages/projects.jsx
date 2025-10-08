import React from "react";

const images = [
  "/images/projects/image1.png",
  "/images/projects/image2.png",
  "/images/projects/image3.png",
  "/images/projects/image4.png",
  "/images/projects/image5.png",
  "/images/projects/image6.png",
];

export default function Projects() {
  // Dividimos las imágenes en 3 columnas llenando por columna
  const columns = [[], [], []];
  const itemsPerColumn = Math.ceil(images.length / 3);

  images.forEach((img, i) => {
    const colIndex = Math.floor(i / itemsPerColumn);
    if (colIndex < 3) {
      columns[colIndex].push(img);
    }
  });

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#f5f7ff] to-[#fff9f5] flex flex-col items-center py-10">
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Our Projects
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Check out some of our recent projects. We have worked with a variety
          of clients to create stunning web applications.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1 w-full max-w-4xl p-8 bg-white/40 rounded-4xl">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-1">
            {col.map((src, index) => {
              const globalIndex = colIndex * itemsPerColumn + index;

              const isTall = [1, 2, 5].includes(globalIndex);
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 ${
                    isTall ? "h-80" : "h-48"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Project ${globalIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
