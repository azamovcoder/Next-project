"use client";

import React, { useEffect } from "react";

import { defaultCart } from "@/lib/features/cart/cartSlice";
import { defaultWishlist } from "@/lib/features/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(defaultCounter(+localStorage.getItem("counter")));
  // }, []);
  useEffect(() => {
    dispatch(
      defaultWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])
    );
  }, []);
  useEffect(() => {
    dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []));
  }, []);
  return null;
};

export default DefaultValues;
