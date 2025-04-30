import React from "react";

const Trending = () => {
  return (
    <section className="px-6 py-8 bg-black">
      <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 h-70">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 h-40 rounded-md hover:scale-105 transition-transform duration-300 rounded-md"
          >
             <img
              src={`./src/assets/img4.png`}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="p-2  ">
              <h3 className="text-sm font-semibold">Your lie in april </h3>
              <p className="text-xs text-gray-400"> A once-prodigy pianist, silenced by grief, finds his world
transformed when he meets a free-spirited violinist. But their journey together is filled with both beauty and
heartbreak as they confront the power of music and the fragility of life. </p>
            </div>
          </div>  
        ))}
      </div>
    </section>
  );
};

export default Trending;
