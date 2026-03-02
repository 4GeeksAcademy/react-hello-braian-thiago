import React from "react";
import Navbar from "./Navbar";
import CardLarge from "./CardLarge";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a mi página</h1>
      <div className="container">
        <CardLarge />
      </div>
      <p>Este es el Home</p>
    </div>
  );
};
//esto es para prueba de commit
export default Home;