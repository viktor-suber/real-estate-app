import React, { useContext } from "react";
import HomesFilterForm from "./HomesFilterForm";
// import { Context } from "../../state/context";

const Header: React.FC = () => {
  // const { appData } = useContext(Context);

  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Search"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"><HomesFilterForm /></div>
    </div>
  );
};

export default Header;
