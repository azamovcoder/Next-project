"use client";

import "./ProductWrapper.scss";

import {
  IoCart,
  IoCartOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts";
import ProductItem from "./ProductItem";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { useGetCategoryQuery } from "@/lib/api/categoryApi";
import { useGetProductsQuery } from "@/lib/api/productAPI";

const ProductWrapper = ({ limit }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const [categoryValue, setCategoryValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({
    limit,
    page: 1,
    category: categoryValue,
  });
  const { data: categories } = useGetCategoryQuery();
  // const wishlist = useSelector((state) => state.wishlist.value);
  // const cart = useSelector((state) => state.cart.value);
  console.log(categories);
  return (
    <>
      <div className="products container">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones</p>
        <ul className="products__category">
          <li className="products__category__item">
            <data onClick={() => setCategoryValue("")} value="">
              All
            </data>
          </li>
          {categories?.map((item) => (
            <li className="products__category__item" key={item.id}>
              <data
                onClick={() => setCategoryValue(item.name)}
                value={item?.name}
              >
                {item?.name}
              </data>
            </li>
          ))}
        </ul>
        <div className="products__cards">
          {isLoading ? (
            <LoadingProducts />
          ) : (
            data?.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductWrapper;
