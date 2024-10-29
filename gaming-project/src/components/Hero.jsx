import React, { useEffect } from "react";
import "../style/Hero.css";
import Carousel from "./Carousel";
import TextEncrypted from "./EncryptedText"; // Import the new component

import {
  arenaBreakout,
  leagueOfLegends1,
  leagueOfLegends2,
  valorant1,
  valorant2,
  valorant3,
} from "../assets";


const Hero = () => {
  const images = [
    arenaBreakout,
    leagueOfLegends1,
    leagueOfLegends2,
    valorant1,
    valorant2,
    valorant3,
  ];

  return (
    <div className="hero">
      <div className="overlay">
      <div className="overlay-text">
        <TextEncrypted text="Enter the World of Gamers !" interval={100} />
      </div>
      </div>
      <button className="button">Dashboard</button>
      <Carousel images={images} interval={5000} />
    </div>
  );
};

export default Hero;
