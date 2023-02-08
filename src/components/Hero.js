import React from "react";
import hero from "../../public/images/hero.png";

const Hero = () => {
  return (
    <>
      <h1>Hi this is fahad</h1>
      <img src="/images/Apple.png" alt="apple" />
      <img src="/images/hero.png" alt="Hero" />
      <img src={hero} alt="Hero" />
    </>
  );
};

export default Hero;
