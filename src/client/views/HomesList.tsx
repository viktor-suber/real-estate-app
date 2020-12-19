import React, { useContext } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "../shared/components/Header";
import HomeCard from "../shared/components/HomeCard";
import HomeDetails from "../shared/components/HomeDetails/HomeDetails";
import { Context } from "../state/context";

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const {
    homes,
    selectedLocation,
    selectedMinPrice,
    selectedMaxPrice,
    selectedMinBedrooms,
    selectedMaxBedrooms,
  } = appData || {};
  let match = useRouteMatch();

  return (
    <>
    <main className="mx-xxl-6 mx-xl-5 mx-md-4 mx-sm-3 mx-2">
      <Switch>
        <Route path={`${match.path}/:homeId`}>
          <HomeDetails />
        </Route>
        <Route path={match.path}>
          <h1 className="display-5 text-center py-4">
            Viewing Homes ${selectedMinPrice} to ${selectedMaxPrice},{" "}
            {selectedMinBedrooms} to {selectedMaxBedrooms} Bedrooms
            {selectedLocation ? ` in ${selectedLocation}` : null}
          </h1>
          <div className="card-columns">
            {homes.map((home: any) => {
              const { city, state } = home.property.address;

              if (
                selectedMinPrice <= home.price &&
                home.price <= selectedMaxPrice &&
                selectedMinBedrooms <= home.property.numberBedrooms &&
                home.property.numberBedrooms <= selectedMaxBedrooms &&
                ((selectedLocation &&
                  (selectedLocation === state ||
                    selectedLocation === `${city}, ${state}`)) ||
                  !selectedLocation)
              ) {
                return (
                  <Link to={`homes/${home.id}`} key={home.id}>
                    <HomeCard homeInfo={home.property} price={home.price} />
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </Route>
      </Switch>
      </main>
    </>
  );
};

export default HomesList;
