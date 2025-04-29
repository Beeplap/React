import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-400 to-indigo-900">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
