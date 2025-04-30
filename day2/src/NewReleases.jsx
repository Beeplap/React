import React from "react";

const NewReleases = () => {
  return (
    <section className="height-20 px-6 py-8 bg-black">
      <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 h-70 md:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 h-40 rounded-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`./src/assets/img5.jpg`}
              // alt={`./src/assets/img${i + 1}.png`}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold">Weathering with you {i + 1}</h3>
              <p className="text-xs text-gray-400">In a rainy Tokyo, two lost souls find solace in each other. He seeks a new life, she holds the power to control
              the weather. But their love comes with a dangerous price.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
