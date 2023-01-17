import React from "react";
import "../styles/error.css";
import loader from "../Image/loading.gif";

const error = () => {
  return (
    <>
      <div className="Error">
        <img src={loader} alt="loader" />
      </div>
    </>
  );
};

export default error;
