import React from "react";
import Mask from "../assets/Maskgroup.png"
import blast from "../assets/coffee_blast.png"
const Section2 = () => {
  return (
    <div className="flex flex-row h-[600px]">
      <div className="p-20">
        <h1 className="font-bold text-5xl font-serif text-amber-800">Discover the best coffee</h1>
        <p className=" text-gray-600 mt-10 font-serif text-xl md:text-2xl ">
          Bean Scene is a coffee shop that provides you with quality coffee <br/>that
          helps boost your productivity and helps build your mood.<br/> Having a cup
          of coffee is good, but having a cup of real coffee is<br/> greater. There
          is no doubt that you will enjoy this coffee more<br/> than others you have
          ever tasted.
        </p>
        <button className=" text-black font-semibold text-1xl mt-10 bg-amber-300 p-4 rounded-4xl font-serif">Learn More</button>
        <img src={blast} className="relative right-40 bottom-20"/>
      </div>
      <div className="px-10">
        <img src={Mask}/>
      </div>
    </div>
  );
};

export default Section2;
