import React from "react";
import redSvg from "../assets/images/red.svg";
import greenSvg from "../assets/images/green.svg";
import yellowSvg from "../assets/images/yellow.svg";

const BmiCategories = () => {
  return (
    <div
      className="
    w-72 md:w-2/5 animate-categMobileDrop md:animate-categDrop mt-10 mb-10 md:m-0
    border border-slate-400 
    h-1/2 rounded-l flex items-center justify-center flex-col
   "
    >
      <h3 className="text-2xl  md:text-3xl font-light tracking-wider mb-5 md:mb-7"
      >BMI Categories</h3>
      <section className="w-4/5 flex items-center justify-center">
        <p className="text-sm  md:text-xl text-slate-900 font-medium md:font-light tracking-wide mt-5 ">
          Underweight = &lt; 18.5
        </p>
        <img src={redSvg} alt="red" className="w-3 md:w-5 mt-5 ml-5 opacity-80" />
      </section>
      <section className="w-4/5 flex items-center justify-center">
        <p className="text-sm  md:text-xl text-slate-900 font-medium md:font-light tracking-wide mt-5 ">
          Normal weight = 18.5 &minus; 24.9
        </p>
        <img src={greenSvg} alt="red" className="w-3 md:w-5 mt-5 ml-5 opacity-80" />
      </section>
      <section className="w-4/5 flex items-center justify-center">
        <p className="text-sm  md:text-xl text-slate-900 font-medium md:font-light tracking-wide mt-5 ">
          Overweight = 25 &minus; 29.9
        </p>
        <img src={yellowSvg} alt="red" className="w-3 md:w-5 mt-5 ml-5 opacity-80" />
      </section>
      <section className="w-4/5 flex items-center justify-center">
        <p className="text-sm  md:text-xl text-slate-900 font-medium md:font-light tracking-wide mt-5 ">
          Obesity = BMI of 30 or &gt;
        </p>
        <img src={redSvg} alt="red" className="w-3 md:w-5 mt-5 ml-5 opacity-80" />
      </section>
    </div>
  );
};

export default BmiCategories;
