import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 duration-300 ease-in-out hover:scale-110">
      <div className="bg-third sm:p-2 py-1 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-2xl shadow-inner drop-shadow-lg flex flex-col justify-between items-center">
        <img
          src={props.image}
          alt="pressure"
          className="w-[90%] h-[60%] sm:w-full  sm:h-[70%]"
        />
        <p className="text-second text-[13px] sm:text-md">
          {props.value} {props.unit}
        </p>
      </div>
    </div>
  );
};

export default Card;
