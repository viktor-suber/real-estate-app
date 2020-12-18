import React from "react";

interface DetailsGridProps {
  currentHome: any;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ currentHome }) => {

  return (
    <div className="container py-4">
    <div className="row">
      <div className="col">
        <img src={currentHome.property.primaryImageUrl} className="img-fluid" alt="..." />
      </div>
      <div className="col">
        <p>{currentHome.property.description}</p>
      </div>
    </div>
  </div>
  );
};

export default DetailsGrid;
