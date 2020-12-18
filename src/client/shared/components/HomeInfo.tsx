import React from "react";
import { useParams } from "react-router-dom";

interface URLParam {
  homeId: string;
}


const HomeInfo: React.FC = () => {
  const { homeId } = useParams<URLParam>();

  return (
    <>
      info { homeId }
    </>
  );
};

export default HomeInfo;
