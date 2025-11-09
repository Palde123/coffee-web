import React from "react";
import CoffeeBack from "../assets/Group36.png";
import CoffeeBean from "../assets/coffee_bean.png";
import Cup from "../assets/cup.png";
const OrderNow = () => {
  return (
    <div
      className="relative h-[550px] bg-cover bg-center flex flex-row overflow-x-clip"
      style={{ backgroundImage: `url(${CoffeeBack})` }}
    >
      <div className=" mt-30 relative left-20">
        <h1 className="text-white font-bold text-5xl font-serif">
          Get a chance to have an <br />
          Amazing morning
        </h1>
        <p className="text-white text-xl font-serif mt-10">
          We are giving you are one time opportunity to <br />
          experience a better life with coffee.
        </p>
        <button className="font-serif font-bold  justify-center bg-amber-400 p-3 w-45 rounded-4xl mt-10">Order Now</button>
      </div>
      <div>
        <img
          src={CoffeeBean}
          className="h-137 w-150 relative left-90 object-fill"
        />
        <img src={Cup} className="absolute bottom-16 h-110 left-260  " />
      </div>
    </div>
  );
};

export default OrderNow;
