"use client";

import "./cartWrapper.scss";

import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import CartEmpty from "@/app/assets/cart.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscError } from "react-icons/vsc";

const CartWrapper = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);

  console.log(cartData);
  return (
    <div>
      {cartData.length > 0 ? (
        <div className="container product__carts">
          <div className="product__carts__titles">
            <h3>PRODUCT</h3>
            <ul>
              <li>
                <h3>PRICE</h3>
              </li>
              <li>
                <h3>QTY</h3>
              </li>
              <li>
                <h3>UNIT PRICE</h3>
              </li>
            </ul>
          </div>
          {cartData.map((el) => (
            <div key={el?.id} className="product__carts__cart">
              <div className="product__carts__cart__left">
                <button
                  className="product__carts__cart__remove__btn"
                  onClick={() => dispatch(removeFromCart(el.id))}
                >
                  <VscError />
                </button>

                <div className="product__carts__cart__img">
                  <Image
                    width={200}
                    height={200}
                    src={el?.images[0]}
                    alt={el?.title}
                  />
                </div>
                <h3>{el?.title}</h3>
              </div>
              <div className="product__carts__cart__right">
                <p>${el?.price}</p>
                <p>${(el.price * el.quantity).toFixed(2)}</p>
                <div className="product__carts__cart__counter__btn">
                  <button
                    disabled={el.quantity <= 1}
                    onClick={() => dispatch(decrementCart({ id: el.id }))}
                  >
                    -
                  </button>
                  <span>{el?.quantity}</span>
                  <button onClick={() => dispatch(addToCart(el))}>+</button>
                </div>
                <p className="product__carts__cart__all__price"></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty__cart">
          <Image src={CartEmpty} width={600} height={400} alt="CartEmpty.png" />
          <Link href={"/"}>Go Home</Link>
        </div>
      )}
    </div>
  );
};

export default CartWrapper;
