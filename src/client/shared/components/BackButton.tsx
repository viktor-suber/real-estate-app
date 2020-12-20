import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BackButton: React.FC = () => {
  return (
    <button className="btn btn-secondary"><FontAwesomeIcon icon={faArrowLeft} size="sm"/> Back</button>
  );
};

export default BackButton;
