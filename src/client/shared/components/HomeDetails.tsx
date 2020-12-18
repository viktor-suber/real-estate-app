import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../state/context";

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
    <>
      {currentHome ? (
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
      ) : (
        "Error"
      )}
    </>
  );
};

export default HomeDetails;
