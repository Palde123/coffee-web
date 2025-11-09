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
      <h1 className="font-bold text-5xl font-serif text-center text-white pt-20">
        Subscribe to get the Latest News
      </h1>
      <p className="text-xl font-serif text-center text-white mt-6">
        Don’t miss out on our latest news, updates, tips and special offers
      </p>
      <div className="mt-10 flex  flex-row justify-center ">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full max-w-md px-4 py-3 border  text-2xl  bg-white text-black placeholder-gray-300 focus:outline-none  transition"
      />
      <button className="pd-5 w-30 text-black font-bold font-serif bg-amber-300">Subscribe</button>
      </div>
       <div className="flex justify-between ">
        <img src={WingBean1} alt="Bean Decoration" className=" relative bottom-30 right-20 z-10 " />
        <img src={WingBean2} alt="Bean Decoration" className=" relative bottom-30 z-10" />
      </div>
    </div>
  );
};

export default Subscribe;
