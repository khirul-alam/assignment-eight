"use client"; 
import React from "react";
import Marquee from "react-fast-marquee";

const NewsMarquee = () => {
  return (
    <div className="bg-blue-900 py-3 border-y border-blue-800">
      <Marquee 
        pauseOnHover={true}   
        speed={60}            
        gradient={false}      
      >
        <span className="text-white text-lg font-medium mx-10">
          New Arrivals: Atomic Habits | Rich Dad Poor Dad | Clean Code | Special Discount on Memberships – 20%
        </span>
        
        <span className="text-white text-lg font-medium mx-10">
          New Arrivals: Atomic Habits | Rich Dad Poor Dad | Clean Code | Special Discount on Memberships – 20%
        </span>
      </Marquee>
    </div>
  );
};

export default NewsMarquee;