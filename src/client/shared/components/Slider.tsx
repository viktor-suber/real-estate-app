import React, { useState } from "react";
import { Range } from "react-range";

interface SliderProps {
  type: string;
  min: number;
  max: number;
  step: number;
  handleSliderValues: any;
}

const Slider: React.FC<SliderProps> = ({
  type,
  min,
  max,
  step,
  handleSliderValues,
}) => {
  const [values, setValues] = useState([min, max]);

  const handleChange = (sliderValues: number[]) => {
    setValues(sliderValues);
    handleSliderValues(sliderValues, type);
  };

  return (
    <div className="slider d-flex flex-column align-items-center">
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(sliderValues) => handleChange(sliderValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "5px",
              width: "100%",
              backgroundColor: "#A7A2A9",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "40px",
              width: "8px",
              backgroundColor: "#FCD46F",
            }}
          />
        )}
      />
      <br />
      <output className="range">
        {type === "price" ? (
          <>
            <span className="h5">${values[0]}</span> to{" "}
            <span className="h5">${values[1]}</span>
          </>
        ) : (
          <>
            <span className="h5">{values[0]}</span> to{" "}
            <span className="h5">{values[1]} Bedrooms</span>
          </>
        )}
      </output>
    </div>
  );
};

export default Slider;
