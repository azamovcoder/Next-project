"use client";

import "./wishlistWrapper.scss";

import { IoCartOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import HeartImg from "@/app/assets/heart2.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";

const wishlistWrapper = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData.length);
  const dispatch = useDispatch();
  return (
    <div className="wishlist container">
      {wishlistData.length > 0 ? (
        <div className="wishlist__cards">
          {wishlistData?.map((product) => (
            <div className="wishlist__card" key={product?.id}>
              <div className="wishlist__card__img">
                <div className="wishlist__card__buttons">
                  <button>
                    <IoCartOutline color="#56b280" />
                  </button>
                  <button onClick={() => dispatch(toggleHeart(product))}>
                    {wishlistData.some((el) => el.id === product.id) ? (
                      <IoHeartSharp color="56b280" />
                    ) : (
                      <IoHeartOutline color="#56b280" />
                    )}
                  </button>
                </div>
                <Image
                  width={200}
                  height={200}
                  alt={product?.title}
                  src={product?.images[0]}
                />
              </div>
              <div className="wishlist__card__info">
                <Link href={`/product/${product.id}`}>
                  <h4>{product?.title}</h4>
                </Link>
                <p>{product?.price}$</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="wishlist__none">
          <div className="">
            <Image src={HeartImg} width={500} height={500} alt="Heart.png" />
          </div>

          <Link href={"/"}>Go Home</Link>
        </div>
      )}
    </div>
  );
};

export default wishlistWrapper;
