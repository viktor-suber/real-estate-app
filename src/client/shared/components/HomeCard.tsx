import React from "react";

interface HomeCardProps {
  homeInfo: any;
  price: number;
}

const HomeCard: React.FC<HomeCardProps> = ({ homeInfo, price }) => {
  const {
    description,
    primaryImageUrl,
    address,
    squareFeet,
    numberBedrooms,
    numberBaths,
  } = homeInfo;

  const { addressLine1, city, state } = address;

  return (
    <div className="card mb-2">
      <span className="card-price h4 p-2 m-2">
        ${price}
      </span>
      <img src={primaryImageUrl} className="card-img-top home-card-img" alt="..." />
      <div className="card-body">
      <h5 className="card-title">
        {addressLine1} {city}, {state}
      </h5>
      <p>
        { description }
      </p>
      <div className="row border-top pt-3">
          <div className="col-sm">
            {numberBedrooms}
            <br />
            Bedrooms
          </div>
          <div className="col-sm">
            {numberBaths}
            <br />
            Baths
          </div>
          <div className="col-sm">
            {squareFeet}
            <br />
            Square Feet
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
