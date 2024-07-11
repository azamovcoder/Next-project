import "./About.scss";

import AboutImg from "@/app/assets/about.svg";
import Image from "next/image";
import React from "react";
import checkImg from "@/app/assets/about-check.svg";

const About = () => {
  return (
    <div>
      <div className="about container">
        <div className="about__info">
          <h2>Clean and fragrant soy wax</h2>
          <p className="about__info__desc">
            Made for your home and for your wellness
          </p>
          <div className="about__info__item">
            <Image alt="check.scg" src={checkImg} />
            <p>
              <b>Eco-sustainable:</b>Eco-sustainable:All recyclable materials,
              0% CO2 emissions
            </p>
          </div>
          <div className="about__info__item">
            <Image alt="check.scg" src={checkImg} />
            <p>
              <b>Hyphoallergenic: </b>100% natural, human friendly ingredients{" "}
            </p>
          </div>
          <div className="about__info__item">
            <Image alt="check.scg" src={checkImg} />
            <p>
              <b>Handmade:</b> All candles are craftly made with love.
            </p>
          </div>
          <div className="about__info__item">
            <Image alt="check.scg" src={checkImg} />
            <p>
              <b>Long burning:</b> No more waste. Created for last long.
            </p>
          </div>
          <button>Learn more</button>
        </div>
        <div className="about__img">
          <Image alt="about.svg" src={AboutImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
