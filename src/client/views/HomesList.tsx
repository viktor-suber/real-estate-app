import React, { useContext } from "react";
import HomeCard from "../shared/components/HomeCard";
import { Context } from "../state/context";

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const { homes } = appData || {};

  return (
    <div className="card-columns py-4">
      {homes.map((home: any) => {
              return <HomeCard key={home.id} homeInfo={home.property} price={home.price} />;
            })}
    </div>
  );
};

export default HomesList;
