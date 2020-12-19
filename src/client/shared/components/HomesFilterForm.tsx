import React, { useContext, useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useForm } from "react-hook-form";
import { Context } from "../../state/context";
import { Range } from 'react-range';
import Slider from "./Slider";

const HomesFilterForm: React.FC = () => {
  const { filterHomes, appData } = useContext(Context);
  const { handleSubmit, register } = useForm();

  const [ location, setLocation ] = useState('');

  const { locations, minPrice, maxPrice, minBedrooms, maxBedrooms } = appData || {};

  const [ priceValues, setPriceValues] = useState([minPrice, maxPrice]);
  const [ bedValues, setBedValues ] = useState([minBedrooms, maxBedrooms]);

  const handleSliderValues = (values: number[], type: string) => {
    if (type === 'price') {
      setPriceValues(values);
    } if (type === 'bedrooms') {
      setBedValues(values);
    }
  };

  const onSubmit = (event: any) => {
    let selectionData;
    if (location) {
      const locationString = location.replace(/^"(.*)"$/, '$1');
      selectionData = {selectedLocation: locationString, ...event};
    } else {
      selectionData = {...event, selectedMinPrice: priceValues[0], selectedMaxPrice: priceValues[1], selectedMinBedrooms: bedValues[0], selectedMaxBedrooms: bedValues[1]};
    }
    filterHomes(selectionData);
  };

  return (
      <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" style={{width: '100%'}}>
      <div className="form-group form-row">
        <div className="col ms-1 me-2">
        <label htmlFor="city">Location</label>
        <Typeahead options={locations} id="location" 
        onChange={((selected) => {
          setLocation(JSON.stringify(selected[0]));
        })}
        />
        </div>
        <div className="col mx-2">
          <label>Price</label>
          <Slider type={'price'} min={minPrice} max={maxPrice} step={10000} handleSliderValues={handleSliderValues} />
        </div>
        <div className="col mx-2">
        <label>Bedrooms</label>
        <Slider type={'bedrooms'} min={minBedrooms} max={maxBedrooms} step={1} handleSliderValues={handleSliderValues} />
        </div>
        <button type="submit" className="btn btn-secondary">Search</button>
      </div>
    </form>
      </>
  );
};

export default HomesFilterForm;
