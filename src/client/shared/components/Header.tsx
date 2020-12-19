import React from "react";
import HomesFilterForm from "./HomesFilterForm";

const Header: React.FC = () => {
  return (
    // TODO - IMPLEMENT COLLAPSE
    <div className="navbar navbar-expand">
      <div className="container-fluid">
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Search"><span className="navbar-toggler-icon"></span></button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent"><HomesFilterForm /></div>
      </div>
    </div>
  );
};

export default Header;
