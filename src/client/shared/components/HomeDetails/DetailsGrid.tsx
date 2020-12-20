import React from "react";
import { addCommas } from "../methods";

interface DetailsGridProps {
  currentHome: any;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ currentHome }) => {
  const {
    property,
    price,
    includedItems,
    excludedItems,
    escrowCompany,
    titleCompany,
    listingAgent
  } = currentHome;

  const {
    address,
    primaryImageUrl,
    description,
    numberBedrooms,
    numberBaths,
    squareFeet,
    propertyType,
  } = property;

  const { addressLine1, addressLine2, city, state, zip } = address;

  return (
    <>
    <div className="container h1 p-0 my-4 home-details-title">
      {addressLine1} {city}, {state} - ${addCommas(price)}
    </div>
      <div className="container card home-details-card p-4">
      <div className="row">
        <div className="col">
          <img src={primaryImageUrl} className="details-img" alt={`${addressLine1} ${city}, ${state} - $${price}`} />
          <div className="row mt-4">
            <div className="col-sm">
            <h6>Listing Agent</h6>
            {listingAgent.user.firstName} {listingAgent.user.lastName}
            <br />
           <a href={`mailto:${listingAgent.user.email}`}>{listingAgent.user.email}</a>
            </div>
            <div className="col-sm">
              <h6>Escrow Company</h6>
              {escrowCompany.name}
              <br />
              Officer: {escrowCompany.officerName}
            </div>
            <div className="col-sm">
              <h6>Title Company</h6>
              {titleCompany.name}
              <br />
              Officer: {titleCompany.officerName}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-sm">
              <h6>Description</h6>
              <p className="lead">{description}</p>
            </div>
          </div>
          <div className="row">
          <div className="col-sm">
              <h6>Price</h6>
              <span className="lead">${addCommas(price)}</span>
            </div>
            <div className="col-sm">
              <h6>Address</h6>
              <p className="lead">
              {addressLine1}
              {addressLine2 ? (<><br />{addressLine2}</>) : null}
              <br /> {city}, {state} {zip}
              </p>

            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <h6>Bedrooms</h6>
              <span className="lead">{numberBedrooms}</span>
            </div>
            <div className="col-sm">
              <h6>Bathrooms</h6>
              <span className="lead">{numberBaths}</span>
            </div>
            <div className="col-sm">
              <h6>Square Feet</h6>
              <span className="lead">{squareFeet}</span>
            </div>
          </div>
          {includedItems.length || excludedItems.length ? (
            <div className="row mt-4">
              {includedItems.length ? (
                <div className="col-sm">
                  <h6>Included:</h6>
                  <ul>
                    {includedItems.map((item: any) => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              ) : null}
              {excludedItems.length ? (
                <div className="col-sm">
                  <h6>Not Included:</h6>
                  <ul>
                    {excludedItems.map((item: any) => {
                      return <li key={item.id}>{item.name}</li>;
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="row">
            <div className="col-sm">
              <h6>Type</h6>
              {propertyType.match(/[A-Z][a-z]+/g).join(" ")}
            </div>
            <div className="col-sm">
              <h6>Status</h6>
              {currentHome.state}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DetailsGrid;
