import React, { useEffect } from "react";
import "../style/Hero.css";
import Carousel from "./Carousel";
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
  }, []);

  return (
    <div className="hero">
      <div className="overlay-text" id="text">
        <h1 className="text0">Welcome</h1>
        <h1 className="text1">to the</h1>
        <h1 className="text2">Game</h1>
        <h1 className="text3">World</h1>
      </div>
      <Carousel images={images} interval={5000} />
    </div>
  );
};

export default Hero;
