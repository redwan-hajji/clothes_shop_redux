import React from "react";
import img from "../assets/images/jacket-black-removebg-preview.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-primaryColor pb-6">
      <div className=" space-y-4">
        <h1 className="text-5xl font-semibold leading-tight text-extraDarkColor w-full lg:w-3/4">
          Discovering and Defining Your Own Fashion
        </h1>
        <p className=" w-full lg:w-3/4 text-darkColor font-medium">
          Each Item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style
        </p>
        <button className=" bg-extraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800 rounded-md hover:scale-105 transition-all duration-300 active:scale-100">
          shop now
        </button>
      </div>
      <div className=" bg-darkColor p-5 mt-10 rounded-tr-[290px] rounded-tl-3xl">
        <img src={img} width={600} alt="image" className=" -mb-5 -ml-8" />
      </div>
    </div>
  );
};

export default Home;
