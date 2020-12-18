import React, { useContext } from "react";
import HomeCard from "../shared/components/HomeCard";
import { Context } from "../state/context";

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const { homes, selectedLocation, minPrice, maxPrice, minBedrooms, maxBedrooms } = appData || {};

  return (
    <div className="card-columns py-4">
      {homes.map((home: any) => {
        if ((minPrice <= home.price && home.price <= maxPrice) && (minBedrooms <= home.property.numberBedrooms && home.property.numberBedrooms <= maxBedrooms)) {
          const { city, state } = home.property.address;
          if (selectedLocation) {
            if (selectedLocation === state || selectedLocation === `${city}, ${state}`) {
              return (
                <HomeCard key={home.id} homeInfo={home.property} price={home.price} />
              );
            }
          } else {
            return (
              <HomeCard key={home.id} homeInfo={home.property} price={home.price} />
            );
          }
        }
        return null;
      })}
    </div>
  );
};

export default HomesList;
