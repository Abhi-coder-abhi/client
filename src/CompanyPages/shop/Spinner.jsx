import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Spinner;
