import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" banner d-flex justify-content-center align-items-start">
      <div className="w-75 mx-auto mt-5">
        <h1 className='text-danger'>ShowAround Travel Guide</h1>
        <h3 className="text-white">
          Discover the world with ToursByLocals! Our private tours offer you a
          unique and personalized experience in any destination.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
