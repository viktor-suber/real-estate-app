import React, { useContext, useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useForm } from "react-hook-form";
import { Context } from "../../state/context";
import { Range } from 'react-range';

const HomesFilterForm: React.FC = () => {
  const { filterHomes, appData } = useContext(Context);
  const { handleSubmit, register } = useForm();

  const [ location, setLocation ] = useState('');

  const { locations, minPrice, maxPrice, minBedrooms, maxBedrooms } = appData || {};

  const [ priceValues, setPriceValues] = useState([minPrice, maxPrice]);
  const [ bedValues, setBedValues ] = useState([minBedrooms, maxBedrooms]);

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
          <div className="slider d-flex flex-column align-items-center">
          <Range
          step={10000}
          min={minPrice}
          max={maxPrice}
          values={priceValues}
          onChange={(values) => setPriceValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '5px',
                width: '100%',
                backgroundColor: '#A7A2A9'
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
                height: '40px',
                width: '8px',
                backgroundColor: '#FCD46F'
              }}
              
            />
          )}
        />
        <br />
        <output className="price-range">
          <span className="h5">${priceValues[0]}</span> to <span className="h5">${priceValues[1]}</span>
        </output>
          </div>
        </div>
        <div className="col mx-2">
        <label>Bedrooms</label>
        <div className="slider d-flex flex-column align-items-center">
        <Range
          step={1}
          min={minBedrooms}
          max={maxBedrooms}
          values={bedValues}
          onChange={(values) => setBedValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '5px',
                width: '100%',
                backgroundColor: '#A7A2A9'
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
                height: '40px',
                width: '8px',
                backgroundColor: '#FCD46F'
              }}
              
            />
          )}
        />
        <br />
        <output className="bedrooms-range">
        <span className="h5">{bedValues[0]}</span> to <span className="h5">{bedValues[1]} Bedrooms</span>
        </output>
        </div>
        </div>
        <button type="submit" className="btn btn-secondary">Search</button>
      </div>
    </form>
      </>
  );
};

export default HomesFilterForm;
