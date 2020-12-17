import React from "react";

interface HomeCardProps {
  homeInfo: any;
  price: number;
}

const HomeCard: React.FC<HomeCardProps> = ({ homeInfo, price }) => {

  const { primaryImageUrl, address, squareFeet, numberBedrooms, numberBaths } = homeInfo;

  const { addressLine1, city, state } = address;

  return (
    <div className="card mb-2">
      <img src={primaryImageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{addressLine1} {city}, {state} - ${price}</h5>
        <p className="card-text">
        { numberBedrooms } Bedrooms<br/>
        { numberBaths } Bathrooms<br/>
        { squareFeet } Square Feet
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
