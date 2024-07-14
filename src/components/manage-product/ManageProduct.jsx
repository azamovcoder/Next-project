"use client";

import "./manageProduct.scss";

import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/lib/api/productAPI";

import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const [productDelete] = useDeleteProductMutation();
  console.log(data);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      productDelete(id);
    }
  };

  let manageItem = data?.map((el) => (
    <div className="manageProducts__card" key={el.id}>
      <div className="manageProducts__card__img">
        <Image width={200} height={200} src={el?.images[0]} alt={el?.title} />
      </div>
      <div className="manageProducts__card__info">
        <Link href={`/products/${el.id}`}>
          <h3 className="manageProducts__card__title">{el.title}</h3>
        </Link>
        <h4 className="manageProducts__card__title">{el.price}$</h4>
        <p className="manageProducts__card__desc">{el.desc}</p>
        <div className="manageProducts__card__button">
          <button
            className="manageProducts__card__delete__button"
            onClick={() => handleDelete(el.id)}
          >
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="manageProducts">
      <div className="manageProducts__cards">{manageItem}</div>
    </div>
  );
};

export default ManageProduct;
