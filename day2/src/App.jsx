import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./src/assets/img2.jpg')" }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
