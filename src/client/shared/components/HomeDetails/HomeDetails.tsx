import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../state/context";
import DetailsGrid from "./DetailsGrid";

interface URLParam {
  homeId: string;
}

const HomeDetails: React.FC = () => {
  const { appData } = useContext(Context);
  const { homeId } = useParams<URLParam>();

  const { homes } = appData || {};
  let currentHome: any;

  homes.every((home: any) => {
    if (home.id === parseInt(homeId)) {
      currentHome = home;
      return false;
    }
    return true;
  });

  return (
    <>{currentHome ? <DetailsGrid currentHome={currentHome} /> : "Error"}</>
  );
};

export default HomeDetails;
