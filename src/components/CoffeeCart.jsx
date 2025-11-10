import React from "react";
import item1 from "../assets/Rectangle7.png";
import item2 from "../assets/Rectangle9.png";
import item3 from "../assets/Rectangle11.png";
import item4 from "../assets/Rectangle13.png";
const CoffeeCart = () => {
  return (
    <div className=" h-[1850px] sm:h-[650px] ">
      <div>
        <h1 className="font-bold text-amber-700 sm:text-6xl text-2xl font-serif text-center sm:mt-0 mt-8 sm:px-0 px-2">
          Enjoy a new blend of coffee style
        </h1>
        <p className="text-center text-gray-600 sm:mt-0 mt-5 font-serif text-xl md:text-2xl ">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
      </div>
      <div className="flex sm:flex-row flex-col sm:pt-10 sm:justify-center items-center gap-8 sm:p-0 p-16">
        <div className="bg-amber-100  h-95 w-70 ">
          <img
            src={item1}
            className="w-full h-60 object-fit  group-hover:scale-110 transition-transform duration-500"
          />
          <h1 className="text-amber-900 font-bold text-2xl font-serif text-center mt-3">Cappuccino</h1>
          <p className="font-serif text-center">Coffee 50% | Milk 50%</p>
          <p className="font-serif text-center">$8.50</p>
          <div className="flex flex-row justify-center mt-5">
          <button className="font-serif font-bold  justify-center bg-amber-400 p-3 rounded-4xl">Order Now</button>
          </div>
        </div>
        <div className="bg-amber-100  h-95 w-70">
          <img
            src={item2}
            className="w-full h-60 object-fit  group-hover:scale-110 transition-transform duration-500"
          />
          <h1 className="text-amber-900 font-bold text-2xl font-serif text-center mt-3">Cappuccino</h1>
          <p className="font-serif text-center">Coffee 50% | Milk 50%</p>
          <p className="font-serif text-center">$8.50</p>
          <div className="flex flex-row justify-center mt-5">
          <button className="font-serif font-bold  justify-center bg-amber-400 p-3 rounded-4xl">Order Now</button>
          </div>
        </div>
        <div className="bg-amber-100  h-95 w-70">
          <img
            src={item3}
            className="w-full h-60 object-fit  group-hover:scale-110 transition-transform duration-500"
          />
           <h1 className="text-amber-900 font-bold text-2xl font-serif text-center mt-3">Cappuccino</h1>
          <p className="font-serif text-center">Coffee 50% | Milk 50%</p>
          <p className="font-serif text-center">$8.50</p>
          <div className="flex flex-row justify-center mt-5">
          <button className="font-serif font-bold  justify-center bg-amber-400 p-3 rounded-4xl">Order Now</button>
          </div>
        </div>
        <div className="bg-amber-100  h-95 w-70">
          <img
            src={item4}
            className="w-full h-60 object-fit group-hover:scale-110 transition-transform duration-500"
          />
            <h1 className="text-amber-900 font-bold text-2xl font-serif text-center mt-3">Cappuccino</h1>
          <p className="font-serif text-center">Coffee 50% | Milk 50%</p>
          <p className="font-serif text-center">$8.50</p>
          <div className="flex flex-row justify-center mt-5">
          <button className="font-serif font-bold  justify-center bg-amber-400 p-3 rounded-4xl">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
