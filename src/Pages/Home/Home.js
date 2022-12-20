import React from "react";
import Contact from "../Contact/Contact";
import Hero from "./Hero";
import HomeCourses from "./HomeCourses";

const Home = () => {
  return <div className="bg-primary-black overflow-hidden">
    <Hero/>
   
    
    <div className="relative">
    <HomeCourses/>
      <div className="gradient-03 z-0" />
      <Contact/>
    </div>
  </div>;
};

export default Home;
