import React from "react";
import "../style/Hero.css";
import Carousel from "./Carousel";
import TextEncrypted from "./EncryptedText"; // Import the new component

/*Import background images for the Carousel */
import {
  arenaBreakout,
  leagueOfLegends1,
  leagueOfLegends2,
  valorant1,
  valorant2,
  valorant3,
} from "../assets";

/* Create an Array of the images to be looped through*/
const Hero = () => {
  const images = [
    arenaBreakout,
    leagueOfLegends1,
    leagueOfLegends2,
    valorant1,
    valorant2,
    valorant3,
  ];

  /* Return the content of the page */
  return (
    <div className="hero">
      <div className="overlay">
        <div id="text-section">
            <div><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1></div>
            <div></div>
            {/*<TextEncrypted text="Enter the World of Gamers !" interval={100} />*/}
        </div>
      </div>
      <Carousel images={images} interval={5000} />
    </div>
  );
};

export default Hero;
