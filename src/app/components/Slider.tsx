"use client";
import { useState } from "react";

type SliderProps = {
  title: string; // Title of the slider
  min: number; // Minimum value of the slider
  max: number; // Maximum value of the slider
  step: number; // Step value for the slider
  value: number; // Current value of the slider
  onChange: (value: number) => void; // onChange event handler
};

const Slider = ({ title, min, max, step, value, onChange }: SliderProps) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col mb-10">
      <span className="text-lg mb-2">{title}</span>
      <div className="relative w-full max-w-md h-6">
        {/* Slider Track */}
        <div className="w-full h-1 bg-gray-300 absolute top-1/2 transform -translate-y-1/2 rounded-full"></div>
        {/* Filled Slider Track */}
        <div
          className="h-1 bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        ></div>
        {/* Slider Marks */}
        <div className="relative  flex justify-between w-full">
          {Array.from({ length: (max - min) / step + 1 }).map((_, index) => (
            <span
              key={index}
              className={`w-1 h-1 ${
                index * step <= value ? "bg-black" : "bg-gray-500"
              } rounded-full`}
              style={{ left: `${(index / ((max - min) / step)) * 100}%` }}
            ></span>
          ))}
        </div>
        {/* Input Range */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="w-full absolute appearance-none bg-transparent top-1/2 transform -translate-y-1/2"
          style={{ height: "1rem" }}
        />
        {/* Circular Thumb with Value */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 bg-black rounded-full flex items-center justify-center text-white"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            left: `calc(${((value - min) / (max - min)) * 100}% - 0.75rem)`,
          }}
        >
          <span className="text-xs absolute">{value}</span>
        </div>
      </div>
      <div className="flex justify-between w-full max-w-md mt-2">
        <span className="text-sm">{min}</span>
        <span className="text-sm">{max}</span>
      </div>
    </div>
  );
};

export default Slider;
