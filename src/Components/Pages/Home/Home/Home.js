import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MiddlePart from "../MiddlePart/MiddlePart";
import ServicePart from "../ServicePart/ServicePart";

const Home = () => {
  return (
      <div>
          <Banner></Banner>
          <MiddlePart></MiddlePart>
          <ServicePart></ServicePart>
          <Footer></Footer>
      </div>
  );
};

export default Home;
