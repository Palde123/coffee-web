import React from "react";
import blast2 from "../assets/coffee_blast2.png";
import blast3 from "../assets/coffee_blast1.png";
import user from "../assets/user-1.jpg";
import arrow1 from "../assets/Vector1.png";
import arrow2 from "../assets/Vector.png";
const Feedback = () => {
  return (
    <div className=" overflow-x-clip h-[750px]">
      
      <div className="mt-10">
        <h1 className="font-bold text-5xl font-serif text-center text-amber-900">
          Our coffee perfection feedback
        </h1>
        <p className="text-xl font-serif text-center text-gray-500 mt-6">
          Our customers has amazing things to say about us
        </p>
      </div>

      <div className="mt-10 bg-amber-50 h-120 pt-30 mx-60">
        <div className="flex flex-row justify-around">
          <div className="bg-amber-200  w-20 h-20 flex justify-center items-center rounded-2xl relative right-12 top-15">
            <img src={arrow2} className="h-5 w-5 object-fit " />
          </div>
          <p className="text-xl font-serif text-center text-gray-500 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
            <br /> been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a <br />
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five <br />
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
            <br /> popularised in the 1960s with the release of Letraset.....
          </p>
          <div className="bg-amber-200 w-20 h-20 flex justify-center items-center rounded-2xl relative left-12 top-15">
            <img src={arrow1} className="h-5 w-5 object-fit  " />
          </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 font-serif text-center text-amber-900">
          Jonny Thomas
        </h1>
        <p className="text-xl font-serif text-center text-gray-500 mt-4">
          Project Manager
        </p>
        <div className="flex justify-center mt-15">
            <img src={user} className="h-30 w-30 rounded-2xl "/>
        </div>
      </div>
      <div>
        <img src={blast3} className="relative  left-270 bottom-150 " />
      </div>
      <div>
        <img src={blast2} className="relative   bottom-110 " />
      </div>
      
    </div>
  );
};

export default Feedback;
