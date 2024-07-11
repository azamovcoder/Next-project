"use client";

import "./Header.scss";

import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import React, { useState } from "react";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/app/assets/logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.value);

  const [show, setShow] = useState(false);
  console.log(cartData.length);
  console.log(wishlistData.length);
  return (
    <>
      <div
        onClick={() => setShow((p) => false)}
        className={`overlay ${show ? "overlay-show" : ""} `}
      ></div>
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <Link href={"/"}>
              <Image alt="logo.svg" src={LogoImg} />
            </Link>
          </div>
          <ul className={`header__list ${show ? "show" : ""}`}>
            <li>Discovery</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
          <div className="header__buttons">
            <button>
              <FaRegUser />
            </button>
            <button>
              <span>{cartData.length > 0 ? cartData.length : 0}</span>{" "}
              {/* Display length */}
              <Link href={"/cart"}>
                <IoCartOutline />
              </Link>
            </button>
            <button>
              <span>{wishlistData.length > 0 ? wishlistData.length : 0}</span>{" "}
              {/* Display length */}
              <Link href={"/wishlist"}>
                <IoHeartOutline />
              </Link>
            </button>
            <button onClick={() => setShow((p) => !p)} className="header__bar">
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
