"use client";

import "./ProductWrapper.scss";

import {
  IoCart,
  IoCartOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts";
import React from "react";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const existProduct = cartData.find((el) => el.id == product?.id);

  return (
    <div>
      <div className="products__card" key={product?.id}>
        <div className="products__card__img">
          <div className="products__card__buttons">
            <button onClick={() => dispatch(addToCart(product))}>
              {cartData.some((el) => el.id === product.id) ? (
                <IoCart color="56b280" />
              ) : (
                <IoCartOutline color="#56b280" />
              )}
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
        <div className="products__card__info">
          <Link href={`/product/${product.id}`}>
            <h4>{product?.title}</h4>
          </Link>
          <p>{product?.price}$</p>
          {existProduct ? (
            <>
              <div className="products__card__info__buttons">
                <button onClick={() => dispatch(addToCart(product))}>
                  inc
                </button>
                <span color="red">{existProduct?.quantity}</span>
                <button
                  disabled={product.quantity <= 1}
                  onClick={() => {
                    dispatch(
                      existProduct?.quantity <= 1
                        ? removeFromCart(product.id)
                        : decrementCart(product)
                    );
                  }}
                >
                  dec
                </button>
              </div>
            </>
          ) : (
            <button
              className="products__card__info__button"
              onClick={() => dispatch(addToCart(product))}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
