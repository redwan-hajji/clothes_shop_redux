import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ name }) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 border-2 border-darkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-white transition duration-300 ease-in-out">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className=" text-xl font-semibold text-extraDarkColor pt-4">
          {name}
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit
        tempore earum repellendus dolorum voluptatibus impedit quis rem hic
        quasi?
      </p>
    </div>
  );
};

export default ReviewCard;
