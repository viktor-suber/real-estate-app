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
    <div className="card mb-2 home-card">
      <span className="card-price shadow h4 p-2 m-2">${price}</span>
      <img
        src={primaryImageUrl}
        className="card-img-top home-card-img"
        alt="..."
      />
      <div className="card-body">
        <h4 className="card-title home-card-title">
          {addressLine1} {city}, {state}
        </h4>
        <p>{description}</p>
        <div className="row border-top pt-3 text-center">
          <div className="col-sm">
            <span className="h5">{numberBedrooms}</span>
            <br />
            Bedrooms
          </div>
          <div className="col-sm">
            <span className="h5">{numberBaths}</span>
            <br />
            Bathrooms
          </div>
          <div className="col-sm">
            <span className="h5">{squareFeet}</span>
            <br />
            Square Feet
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
