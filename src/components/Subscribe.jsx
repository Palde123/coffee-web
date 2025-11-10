import React from "react";
import Group46 from "../assets/Group46.png";
import WingBean1 from "../assets/pngwing1.png";
import WingBean2 from "../assets/pngwing2.png";
const Subscribe = () => {
  return (
    <div
      className=" h-[400px] bg-cover bg-center   "
      style={{ backgroundImage: `url(${Group46})` }}
    >
      <h1 className="font-bold sm:text-5xl text-3xl sm:p-0 p-5 font-serif text-center text-white sm:pt-20">
        Subscribe to get the Latest News
      </h1>
      <p className="sm:text-xl font-serif text-center text-white sm:mt-6">
        Don’t miss out on our latest news, updates, tips and special offers
      </p>
      <div className="mt-10 flex  flex-row justify-center ">
      <input
        type="text"
        placeholder="Enter your email"
        className="sm:w-full  sm:max-w-md px-2 sm:px-4 sm:py-3 border  sm:text-2xl text-xl bg-white text-black placeholder-gray-300 focus:outline-none  transition"
      />
      <button className="sm:p-5 p-3 w-30 text-black font-bold font-serif bg-amber-300">Subscribe</button>
      </div>
       <div className="flex justify-between ">
        <img src={WingBean1} alt="Bean Decoration" className=" relative h-48 sm:h-90 sm:bottom-30 sm:right-20 right-10 z-10 " />
        <img src={WingBean2} alt="Bean Decoration" className=" relative  h-48 sm:h-90 sm:bottom-30 z-10" />
      </div>
    </div>
  );
};

export default Subscribe;
