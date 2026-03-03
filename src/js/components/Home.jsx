import React from "react";
import Navbar from "./Navbar";
import CardLarge from "./CardLarge";
import Cards from "./Cards";
import FooterDown from "./footerdown";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <CardLarge titulo="A Warm Welcome!" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, totam itaque. Sapiente non illum dolorem officia ex ipsum consequatur, fugiat odit doloribus! Recusandae amet impedit saepe temporibus ipsum ducimus esse." /> 
        <div><Cards /></div>
      </div>
      <FooterDown />
    </div>
    
  );
};

export default Home;
