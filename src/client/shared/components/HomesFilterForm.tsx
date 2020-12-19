import React, { useContext, useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useForm } from "react-hook-form";
import { Context } from "../../state/context";

const HomesFilterForm: React.FC = () => {
  const { filterHomes, appData } = useContext(Context);
  const { handleSubmit, register } = useForm();

  const [ location, setLocation ] = useState('');

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
      </div>
      <button type="submit" className="btn btn-secondary">Search</button>
    </form>
  );
};

export default HomesFilterForm;
