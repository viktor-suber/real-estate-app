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
              height: "4px",
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
              height: "30px",
              width: "8px",
              backgroundColor: "#FCD46F",
            }}
          />
        )}
      />
      <output className="range">
        {type === "price" ? (
          <>
            <span className="h6">${values[0]}</span> to{" "}
            <span className="h6">${values[1]}</span>
          </>
        ) : (
          <>
            <span className="h6">{values[0]}</span> to{" "}
            <span className="h6">{values[1]}</span> Bedrooms
          </>
        )}
      </output>
    </div>
  );
};

export default Slider;
