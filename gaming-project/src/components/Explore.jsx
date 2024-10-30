// Explore.js
import React from "react";
import Card from "./Cards.jsx";
import "../index.css";
import "../style/Explore.css";

import fortnite from '../assets/assets/fortnite-1.png';
import rocketLeague from '../assets/assets/rocketLeague-1.jpg';
import arenaBreakout from '../assets/assets/arenaBreakoutBg2.jpg';
import callOfDutyWZ from '../assets/assets/carouselImgBg2.jpg';
import eafc25 from '../assets/assets/eafc25bg.jpg';
import blackOps6 from '../assets/assets/blackOps.jpeg';
import mortalKombat1 from '../assets/assets/mortalKombat1.png';
import farcry6 from '../assets/assets/farcry6_2.jpg'



const Explore = () => {
  // Sample card data with image URLs
  const cardData = [
    {
      title: "Fortnite",
      content: "Come and enjoy the exhilirating Battle Royale game.",
      image: fortnite,
    },
    {
      title: "Rocket League",
      content: "Indulge in the thrilling grounds of Rocket League.",
      image: rocketLeague,
    },
    
    {
      title: "Arena Breakout",
      content:
        "Quick wits and Military Tactics are your friend, use them wisely.",
      image: arenaBreakout,
    },

    {
      title: "Call Of Duty : Warzone",
      content: "The all-time fan favourite tactical shooter.",
      image: callOfDutyWZ,
    },
    {
      title: "EAFC 25",
      content: "Challenge Friends and Build your dream Team, Rule the Pitch.",
      image: eafc25,
    },
    {
      title: "Call Of Duty : Black Ops 6",
      content:
        "Come and Participate in the latest release of the Call Of Duty series.",
      image: blackOps6,
    },
    {
      title: "Mortal Kombat 1",
      content: "Come and explore the adventurous lands of the Outworld.",
      image: mortalKombat1,
    },
    {
      title: "FarCry 6",
      content: "This is Harlem, make your own rules and dominate the opponents.",
      image: farcry6,
    },
  ];

  return (
    <article>
      <section className="explore-section">
        {/* Overlay to give a gradient effect */}
        <div className="section-overlay"></div>

        <div className="container">
          <h1 className="explore-title">Explore.</h1>
          <div className="explore-cards">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                content={card.content}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Explore;
