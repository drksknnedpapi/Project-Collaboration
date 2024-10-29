import React, { useEffect } from "react";
import "../style/Hero.css";
import Carousel from "./Carousel";
import TextEncrypted from "./EncryptedText"; // Import the new component
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  fortnite,
  arenaBreakout,
  leagueOfLegends1,
  leagueOfLegends2,
  valorant1,
  valorant2,
  valorant3,
} from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const images = [
    fortnite,
    arenaBreakout,
    leagueOfLegends1,
    leagueOfLegends2,
    valorant1,
    valorant2,
    valorant3,
  ];

  useEffect(() => {
    gsap.to(".text0", {
      x: "20%",
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: ".text0",
        scrub: true,
        start: "top 20%",
      },
    });
    gsap.to(".text2", {
      x: "20%",
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: ".text2",
        scrub: true,
        start: "top 40%",
      },
    });
    gsap.to(".text1", {
      x: "-20%",
      rotate: -10,
      duration: 0.85,
      scrollTrigger: {
        trigger: ".text1",
        scrub: true,
        start: "top 30%",
      },
    });
    gsap.to(".text3", {
      x: "-20%",
      rotate: -10,
      duration: 0.85,
      scrollTrigger: {
        trigger: ".text3",
        scrub: true,
        start: "top 40%",
      },
    });

    document.querySelector("#back").addEventListener("click", () => {
      gsap.to(window, { duration: 1, scrollTo: "body" });
    });
  }, []);

  return (
    <div className="hero">
      <div className="overlay-text">
        <TextEncrypted text="Welcome to the Game World" interval={50} />
      </div>
      <Carousel images={images} interval={5000} />
      <div id="back">Back to Top</div>
    </div>
  );
};

export default Hero;
