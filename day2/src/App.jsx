import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Trending from "./Trending";
import ContinueWatching from "./ContinueWatching";
import NewReleases from "./NewReleases";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./src/assets/img1.png')" }}
      >
        <Navbar />
        <Hero />
      </div>
      

     
      <Trending />
      <ContinueWatching />
      <NewReleases />
    </div>
  );
};

export default Home;
