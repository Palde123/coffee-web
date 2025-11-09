import React from "react";
import blast1 from "../assets/coffee_blast1.png";
import beanicon1 from "../assets/badge1.png";
import beanicon2 from "../assets/coffee-beans1.png";
import beanicon3 from "../assets/coffee-cup1.png";
import beanicon4 from "../assets/best-price1.png";

const WhyDifferent = () => {
  return (
    <div className="h-screen overflow-x-clip">
      <div>
        <h1 className="font-bold text-5xl font-serif text-amber-800 text-center">
          Why are we different?
        </h1>
        <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-2xl">
          We don’t just make your coffee, we make your day!
        </p>

        <img src={blast1} className="relative left-280 bottom-60" />
        <div className="flex flex-row pt-10 justify-center gap-8 relative bottom-60">
          <div className="bg-amber-50 h-70 w-70 ">
            <div className="flex justify-center mt-7">
            <img src={beanicon2}className="h-20 w-20" />
            </div>
            <h1 className="font-bold text-amber-900 text-2xl font-serif text-center mt-4">
              Supreme Beans
            </h1>
            <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-1xl">
              Beans that provides<br/> great taste
            </p>
          </div>
          <div className="bg-amber-50  h-70 w-70">
             <div className="flex justify-center mt-7">
            <img src={beanicon1} />
            </div>
            <h1 className="font-bold text-amber-900 text-2xl font-serif text-center mt-4">
              High Quality
            </h1>
            <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-1xl">
              We provide the <br/>highest quality
            </p>
          </div>
          <div className="bg-amber-50  h-70 w-70">
             <div className="flex justify-center mt-7">
            <img src={beanicon3} />
            </div>
            <h1 className="font-bold text-amber-900 text-2xl font-serif text-center mt-4">
              Extraordinary{" "}
            </h1>
            <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-1xl">
              Coffee like you have<br/> never tasted
            </p>
          </div>
          <div className="bg-amber-50  h-70 w-70">
             <div className="flex justify-center mt-7">
            <img src={beanicon4} />
            </div>
            <h1 className="font-bold text-amber-900 text-2xl font-serif text-center mt-4">
              Affordable
            </h1>
            <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-1xl">
              Our Coffee prices are <br/>easy to afford
            </p>
          </div>
        </div>
        <div className="  relative bottom-50">
          <p className="text-center text-gray-600 mt-5 font-serif text-xl md:text-1xl">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h1 className="font-bold text-amber-900 text-3xl font-serif text-center mt-3">Get started today.</h1>
          <div className="flex flex-row justify-center mt-5">
            <button className="font-serif font-bold  justify-center bg-amber-400 p-4 w-45 rounded-4xl">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferent;
