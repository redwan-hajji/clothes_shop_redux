import React from "react";
import img from "../assets/images/jeansAndShorts-removebg-preview.png";

const Collections = () => {
  return (
    <div className=" h-screen lg:h-[70ch] flex flex-col justify-center lg:flex-row items-center bg-primaryColor mt-14 lg:px-32 px-5">
      <div className="flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" className="" />
      </div>
      <div className="w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className=" text-4xl font-semibold text-extraDarkColor">
          Best Summer Collection
        </h1>
        <h3 className=" text-lg font-medium text-darkColor">
          Sales get up to 60% off
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex vero
          distinctio optio enim eius deleniti consectetur perferendis sapiente
          dignissimos!
        </p>
        <button className=" bg-extraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800 ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Collections;
