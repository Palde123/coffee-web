import React from "react";
import blast2 from "../assets/coffee_blast2.png";
import blast3 from "../assets/coffee_blast1.png";
import user from "../assets/user-1.jpg";
import arrow1 from "../assets/Vector1.png";
import arrow2 from "../assets/Vector.png";
const Feedback = () => {
  return (
    <div className=" overflow-x-clip sm:h-[750px] h-[730px] ">
      <div className="mt-10">
        <h1 className="font-bold sm:text-5xl text-3xl font-serif text-center text-amber-900">
          Our coffee perfection feedback
        </h1>
        <p className="text-xl font-serif text-center text-gray-500 mt-6">
          Our customers has amazing things to say about us
        </p>
      </div>

      <div className="mt-10  bg-amber-50 sm:h-120 h-100 sm:pt-30 mx-6 sm:mx-60  sm:px-0 ">
        <div className="flex sm:flex-row sm:justify-around">
          <div className="bg-amber-200 w-50 p-3 sm:p-0  sm:w-20 h-12 sm:h-20 flex justify-center items-center rounded-2xl relative sm:right-12 right-5 top-35 sm:top-15 ">
            <img src={arrow2} className="sm:h-5 sm:w-5 object-fit " />
          </div>
          <p className=" mt-10 sm:mt-0 sm:text-xl text-xs  font-serif sm:text-center text-gray-500 ">
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
          <div className="bg-amber-200 h-12 w-50 p-2  sm:p-0 sm:w-20 sm:h-20 flex justify-center items-center rounded-2xl relative left-5 sm:left-12 top-35 sm:top-15">
            <img src={arrow1} className="sm:h-5   sm:w-5 object-fit  " />
          </div>
        </div>
        <h1 className="font-bold sm:text-3xl sm:mt-5 mt-2 font-serif text-center text-amber-900">
          Jonny Thomas
        </h1>
        <p className="sm:text-xl font-serif text-center text-gray-500 sm:mt-4 mt-2">
          Project Manager
        </p>
        <div className="flex justify-center sm:mt-15 mt-5">
          <img src={user} className="h-30 w-30 rounded-2xl " />
        </div>
      </div>
      <div>
        <img
          src={blast3}
          className="relative left-45 sm:left-270 sm:bottom-150 bottom-135"
        />
      </div>
      <div>
        <img src={blast2} className="relative   sm:bottom-110  bottom-90 sm:right-0 right-70" />
      </div>
    </div>
  );
};

export default Feedback;
