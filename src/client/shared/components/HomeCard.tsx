import { faArrowRight, faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface HomeCardProps {
  homeInfo: any;
  price: number;
  id: number;
}

const HomeCard: React.FC<HomeCardProps> = ({ homeInfo, price, id }) => {
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
        alt={`${address} - ${price}`}
      />
      <div className="card-body">
        <h4 className="card-title home-card-title">
          {addressLine1} {city}, {state}
        </h4>
        <p>{description}</p>
        <div className="d-flex justify-content-end mb-3">
        <Link to={`homes/${id}`} >
        <button className="btn btn-primary">Learn More <FontAwesomeIcon icon={faArrowRight} size="sm"/></button>
        </Link>
        </div>
        <div className="row border-top pt-3 text-center">
          <div className="col-sm">
            <span className="h5">{numberBedrooms}</span> <FontAwesomeIcon icon={faBed} size="lg"/>
            <br />
            Bedrooms
          </div>
          <div className="col-sm">
            <span className="h5">{numberBaths}</span> <FontAwesomeIcon icon={faBath} size="lg"/>
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
