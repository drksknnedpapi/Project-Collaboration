import React from "react";
import "../style/Hero.css";
import "../index.css";
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
    <article>
      <section className="hero-section">
        <div>
          <div className="overlay">
            <div className="hero" id="hero">
              <div className="container">
                

                <p className="hero-subtitle"><TextEncrypted text="The Season 8" interval={100} /></p>

                <h1 className="h1 hero-title"><TextEncrypted text="stream!" interval={200} /></h1>

                <div className="btn-group">
                  <button className="btn btn-primary">
                    <span>Watch live</span>

                    <ion-icon name="play-circle"></ion-icon>
                  </button>

                  <button className="btn btn-link">Dashboard</button>
                </div>
              </div>
            </div>
          </div>

          {/*Carousel for Background */}

          <Carousel images={images} interval={5000} />
        </div>
      </section>
    </article>
  );
};

export default Hero;
