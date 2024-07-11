import "./Footer.scss";

import FooterImg from "@/app/assets/footer.svg";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container footer__container">
        <div className="footer__info">
          <Image alt="footer.svg" src={FooterImg} />
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className="footer__lists">
          <ul className="footer__list">
            <li>
              <h3>Discovery</h3>
            </li>
            <li>
              <span>New season</span>
            </li>
            <li>
              <span>Most searched</span>
            </li>
            <li>
              <span>Most selled</span>
            </li>
          </ul>
          <ul className="footer__list">
            <li>
              <h3>About</h3>
            </li>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Shipping</span>
            </li>
            <li>
              <span>Affiliate</span>
            </li>
          </ul>
          <ul className="footer__list">
            <li>
              <h3>Info</h3>
            </li>
            <li>
              <span>Contact us</span>
            </li>
            <li>
              <span>Privacy Policies</span>
            </li>
            <li>
              <span>Terms & Conditions</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
