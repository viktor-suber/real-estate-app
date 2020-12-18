import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HomeCard from "../shared/components/HomeCard";
import { Context } from "../state/context";

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const {
    homes,
    selectedLocation,
    minPrice,
    maxPrice,
    minBedrooms,
    maxBedrooms,
  } = appData || {};
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={match.path}>
          <div className="card-columns py-4">
            {homes.map((home: any) => {
              const { city, state } = home.property.address;

              if (
                minPrice <= home.price &&
                home.price <= maxPrice &&
                minBedrooms <= home.property.numberBedrooms &&
                home.property.numberBedrooms <= maxBedrooms &&
                ((selectedLocation &&
                  (selectedLocation === state ||
                    selectedLocation === `${city}, ${state}`)) ||
                  !selectedLocation)
              ) {
                return (
                  <HomeCard
                    key={home.id}
                    homeInfo={home.property}
                    price={home.price}
                  />
                );
              }
              return null;
            })}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default HomesList;
