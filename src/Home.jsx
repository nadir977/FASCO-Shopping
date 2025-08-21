import React from "react"; 
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Instagram from "./components/Instagram";
import Testimonial from "./components/Testimonial";
import Deals from "./components/Deals";
import NewArrivals from "./components/NewArrivals";

const Home = () => {
  return (
    <>
    
      <Hero />
      <div className="bg-[#FAFAFA] ">
        <div className="max-w-[1400px] mx-auto ">
          <div id="deals">
            <Deals />
          </div>
        </div>
      </div>
       <div id="new-arrivals">
        <NewArrivals />
      </div>
      <div id="packages">
        <Collection />
      </div>
      <Instagram />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
