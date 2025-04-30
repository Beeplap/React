import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./src/assets/img1.png')" }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
