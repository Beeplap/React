// ContinueWatching.jsx
import React from "react";

const ContinueWatching = () => {
  return (
    <section className="px-6 py-8 bg-black">
      <h2 className="text-2xl font-semibold mb-4">Continue Watching</h2>
      <div className="flex space-x-4 h-60 scrollbar-hide">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="min-w-[180px] h-32 bg-gray-800 rounded-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`./src/assets/img6.jpg`}
              alt={`Continue Watching ${i + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold">Plastic Memories </h3>
              <p className="text-xs text-gray-400">In a future where androids mimic human emotion, two individuals forge a powerful
connection. But time is against them, and their love will be tested by the limits of technology and the fragility
of memory.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;
