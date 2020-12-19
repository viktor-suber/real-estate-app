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
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="form-group form-row">
        <div className="col">
        <label htmlFor="city">Location</label>
        <Typeahead options={locations} id="location" 
        onChange={((selected) => {
          setLocation(JSON.stringify(selected[0]));
        })}
        />
        </div>
        <div className="col">
          <label>Price</label>
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
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc'
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
                height: '20px',
                width: '20px',
                backgroundColor: '#999'
              }}
              
            />
          )}
        />
        <br />
        <output style={{ marginTop: '30px' }}>
          {priceValues[0]} - {priceValues[1]}
        </output>
        </div>
        <div className="col">
        <label>Bedrooms</label>
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
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc'
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
                height: '20px',
                width: '20px',
                backgroundColor: '#999'
              }}
              
            />
          )}
        />
        <br />
        <output style={{ marginTop: '30px' }}>
          {bedValues[0]} - {bedValues[1]}
        </output>
        </div>
      <div className="col">
        <button type="submit" className="btn btn-secondary">Search</button>
      </div>
      </div>
    </form>
      </>
  );
};

export default HomesFilterForm;
