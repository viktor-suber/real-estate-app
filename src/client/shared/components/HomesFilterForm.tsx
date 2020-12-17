import React, { useContext } from "react";
// import { Context } from "../../state/context";

const HomesFilterForm: React.FC = () => {
  // const { appData } = useContext(Context);

  return (
    <form autoComplete="off">
      <div className="form-group form-row">
        <div className="col">
          <label htmlFor="location">Location</label>
          <input type="text" className="form-control" id="location"></input>
        </div>
        <div className="col">
          <label htmlFor="minPrice">Min Price</label>
          <input type="text" className="form-control" id="minPrice"></input>
        </div>
        <div className="col">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" className="form-control" id="maxPrice"></input>
        </div>
        <div className="col">
          <label htmlFor="minBedrooms">Min Bedrooms</label>
          <input type="text" className="form-control" id="minBedrooms"></input>
        </div>
        <div className="col">
          <label htmlFor="maxBedrooms">Max Bedrooms</label>
          <input type="text" className="form-control" id="maxBedrooms"></input>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default HomesFilterForm;
