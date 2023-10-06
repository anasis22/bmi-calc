import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bmiMatch, clear } from "../redux/bmiValSlice";

const BmiCalc = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmiCat, setBmiCat] = useState();
  const bmiValue = useSelector((state) => state.getBmiVal.bmi);
  const dispatch = useDispatch();
  const heightRef = useRef();
  const weightRef = useRef();

  const bmiCalc = (e) => {
    e.preventDefault();
    return (h, w) => {
      const metre = h / 100;
      const metreSquare = metre * metre;
      const val = w / metreSquare;
      const bmiVal = val.toFixed(2);
      bmiVal <= 0
        ? setBmiCat("")
        : bmiVal < 18.5
        ? setBmiCat("underweight")
        : bmiVal < 23.9
        ? setBmiCat("normal")
        : bmiVal < 29.9
        ? setBmiCat("overweight")
        : bmiVal >= 30 && setBmiCat("obesity");
      console.log(bmiVal);
      return bmiVal;
    };
  };

  const clearFn = () => {
    heightRef.current.value = "";
    setHeight("");
    weightRef.current.value = "";
    setWeight("");
    dispatch(clear());
    setBmiCat();
  };

  return (
    <form
      className="
     w-72 md:w-96 animate-calcDrop mt-10 md:m-0
     border border-slate-400 
     h-1/2 rounded-l flex items-center justify-center flex-col
    "
      onSubmit={(e) => dispatch(bmiMatch(bmiCalc(e)(height, weight)))}
    >
      <section className="flex items-center justify-center mt-5">
        <h2 className="mb-5 text-5xl font-extralight">{bmiValue}</h2>
        <p className="ml-2">kg/m2</p>
        <p
          className={`ml-2 ${
            (bmiCat == "underweight" && "text-red-500") ||
            (bmiCat == "normal" && "text-green-500") ||
            (bmiCat == "overweight" && "text-yellow-500") ||
            (bmiCat == "obesity" && "text-red-500")
          }`}
        >
          {bmiCat && `(${bmiCat})`}
        </p>
      </section>
      <section className="mb-5 flex flex-col w-full items-center">
        <label className="text-2xl text-slate-900 font-extralight ">
          Height
        </label>
        <input
          className="w-4/5 h-10 border rounded-sm mt-3
           border-slate-400 bg-transparent p-2
            text-slate-200 outline-none
            placeholder:text-slate-700"
          placeholder="in cm"
          type="text"
          value={height}
          ref={heightRef}
          required
          onChange={(e) => setHeight(e.target.value)}
        />
      </section>
      <section className="mb-5 flex flex-col w-full items-center">
        <label className="text-2xl text-slate-900 font-extralight">
          Weight
        </label>
        <input
          className="w-4/5 h-10 border rounded-sm mt-3
           border-slate-400 bg-transparent p-2
            text-white outline-none
             placeholder:text-slate-700"
          placeholder="in kg"
          type="text"
          value={weight}
          ref={weightRef}
          required
          onChange={(e) => setWeight(e.target.value)}
        />
      </section>
      <section className="w-full flex justify-around mt-5">
        <button
          type="submit"
          className="
       text-md font-light tracking-wide pl-2 pr-2 pt-1 pb-1 mb-5
       border border-slate-400 hover:border-slate-200 text-slate-800 hover:text-slate-300 rounded-sm
      "
        >
          Calculate
        </button>

        <button
          className="
       text-md font-light tracking-wide pl-2 pr-2 pt-1 pb-1 mb-5
       border border-slate-400 hover:border-slate-200 text-slate-800 hover:text-slate-300 rounded-sm
      "
          onClick={clearFn}
        >
          Clear
        </button>
      </section>
    </form>
  );
};

export default BmiCalc;
