import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../state/context";

const HomesFilterForm: React.FC = () => {
  const { filterHomes } = useContext(Context);
  const { handleSubmit, register } = useForm();

  const onSubmit = (event: any) => {
    filterHomes(event);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="form-group form-row">
        <div className="col">
        <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="form-control"
            ref={register}
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
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default HomesFilterForm;
