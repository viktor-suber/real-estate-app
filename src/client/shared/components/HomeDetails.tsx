import React from "react";
import { useParams } from "react-router-dom";

interface URLParam {
  homeId: string;
}


const HomeDetails: React.FC = () => {
  const { homeId } = useParams<URLParam>();

  return (
    <>
      info { homeId }
    </>
  );
};

export default HomeDetails;
