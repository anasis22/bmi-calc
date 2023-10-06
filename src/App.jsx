import React from "react";
import BmiCalc from "./components/BmiCalc";
import BmiCategories from "./components/BmiCategories";
import BmiHeading from "./components/BmiHeading";

const App = () => {
  return (
    <div
      className="w-screen h-screen
    bg-gradient-to-r from-fromColor via-midColor to-endColor
    flex items-center justify-around flex-col
    "
    >
      <BmiHeading />
      <section
        className="w-screen h-screen
    flex items-center justify-around flex-col md:flex-row 
    "
      >
        <BmiCalc />
        <BmiCategories />
      </section>
    </div>
  );
};

export default App;
