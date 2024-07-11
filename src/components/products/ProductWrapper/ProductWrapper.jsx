"use client";

import "./ProductWrapper.scss";

import {
  IoCart,
  IoCartOutline,
  IoHeartOutline,
  IoHeartSharp,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import LoadingProducts from "@/components/LoadingProducts/LoadingProducts";
import React from "react";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import { useGetProductsQuery } from "@/lib/api/productAPI";

const ProductWrapper = ({ limit }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const { data, isLoading } = useGetProductsQuery({ limit: limit });

  return (
    <>
      <div className="products container">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones</p>
        <div className="products__cards">
          {isLoading ? (
            <LoadingProducts />
          ) : (
            data?.products?.map((product) => (
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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductWrapper;
