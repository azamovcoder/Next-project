"use client";

import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const SinglePageButtons = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  console.log(cartData);
  const existProduct = cartData.find((el) => el.id == product?.id);
  console.log(cartData.quantity);
  return (
    <div>
      {existProduct ? (
        <>
          <button onClick={() => dispatch(addToCart(product))}>inc</button>
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
        </>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SinglePageButtons;
