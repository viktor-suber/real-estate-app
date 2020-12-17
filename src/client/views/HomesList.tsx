import React, { useContext } from "react";
import HomeCard from "../shared/components/HomeCard";
import { Context } from "../state/context";

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const { homes } = appData || {};

  return (
    // <div className="py-5">
    //   <div className="container">
    //     <div className="row">
    //         {homes.map((home: any) => {
    //           return <div className="col-xl-4 col-lg-4 col-md-6"><HomeCard key={home.id} homeInfo={home.property} /></div>;
    //         })}
    //     </div>
    //   </div>
    // </div>
    <div className="card-columns">
      {homes.map((home: any) => {
              return <HomeCard key={home.id} homeInfo={home.property} price={home.price} />;
            })}
    </div>
  );
};

export default HomesList;
