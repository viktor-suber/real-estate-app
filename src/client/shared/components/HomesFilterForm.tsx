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

  const onSubmit = (event: any) => {
    let selectionData;
    if (location) {
      const locationString = location.replace(/^"(.*)"$/, '$1');
      selectionData = {selectedLocation: locationString, ...event};
    } else {
      selectionData = {...event, selectedMinPrice: priceValues[0], selectedMaxPrice: priceValues[1]};
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
        {/* <label htmlFor="selectedMinPrice">Min Price</label>
          <input
            type="text"
            placeholder="Min Price"
            name="selectedMinPrice"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="col">
        <label htmlFor="selectedMaxPrice">Max Price</label>
          <input
            type="text"
            placeholder="Max Price"
            name="selectedMaxPrice"
            className="form-control"
            ref={register}
          /> */}
        </div>
        <div className="col">
        <label htmlFor="selectedMinBedrooms">Min Bedrooms</label>
          <input
            type="text"
            placeholder="Min Bedrooms"
            name="selectedMinBedooms"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="col">
        <label htmlFor="selectedMaxBedrooms">Max Bedrooms</label>
          <input
            type="text"
            placeholder="Max Bedrooms"
            name="selectedMaxBedrooms"
            className="form-control"
            ref={register}
          />
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
