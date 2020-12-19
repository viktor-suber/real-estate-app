import React, { useContext, useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useForm } from "react-hook-form";
import { Context } from "../../state/context";
import { Range } from 'react-range';

const HomesFilterForm: React.FC = () => {
  const { filterHomes, appData } = useContext(Context);
  const { handleSubmit, register } = useForm();

  const [ location, setLocation ] = useState('');
  const [ values, setValues] = useState([0, 5000000]);

  const { locations } = appData || [];

  const onSubmit = (event: any) => {
    let selectionData;
    if (location) {
      const locationString = location.replace(/^"(.*)"$/, '$1');
      selectionData = {selectedLocation: locationString, ...event};
    } else {
      selectionData = event;
    }
    filterHomes(selectionData);
  };

  return (
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
        <label htmlFor="minPrice">Min Price</label>
          <input
            type="text"
            placeholder="Min Price"
            name="minPrice"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="col">
        <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            placeholder="Max Price"
            name="maxPrice"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="col">
        <label htmlFor="minBedrooms">Min Bedrooms</label>
          <input
            type="text"
            placeholder="Min Bedrooms"
            name="minBedrooms"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="col">
        <label htmlFor="maxBedrooms">Max Bedrooms</label>
          <input
            type="text"
            placeholder="Max Bedrooms"
            name="maxBedrooms"
            className="form-control"
            ref={register}
          />
        </div>
      <div className="col">
        <button type="submit" className="btn btn-secondary">Search</button>
      </div>
      </div>
      <br />
      <Range
        step={5000}
        min={0}
        max={5000000}
        values={values}
        onChange={(values) => setValues(values)}
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
    </form>
  );
};

export default HomesFilterForm;
