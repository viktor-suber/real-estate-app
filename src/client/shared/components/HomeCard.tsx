import React from "react";

interface HomeCardProps {
  homeInfo: any;
}

const HomeCard: React.FC<HomeCardProps> = ({ homeInfo }) => {

  const {primaryImageUrl} = homeInfo;

  return (
    <div className="card mb-2">
      <img src={primaryImageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
           { primaryImageUrl }
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
