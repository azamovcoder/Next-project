"use client";

import "./createProduct.scss";

import React, { useState } from "react";

import { useCreateProductMutation } from "@/lib/api/productAPI";
import { useGetCategoryQuery } from "@/lib/api/categoryApi";

let initialState = {
  title: "",
  price: "",
  desc: "",
  category: "",
  images: [
    "https://media.licdn.com/dms/image/C4E12AQGf_c_UlvMyEQ/article-cover_image-shrink_720_1280/0/1553721327969?e=2147483647&v=beta&t=dVNoa0RtUHWyT1SrOyJtXAFDU1tnKNsGaiyDqgv58KI",
  ],
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  const [createProduct, { data: productData }] = useCreateProductMutation();
  const { data, isLoading } = useGetCategoryQuery();

  const handleChange = (e) => {
    let { value, name } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct(newProduct);
    setNewProduct(initialState);
  };

  console.log(newProduct);

  return (
    <div className="form">
      <h2 className="form__title">CreateProduct</h2>
      <form className="form__info" onSubmit={handleCreate} action="">
        <input
          required
          type="text"
          name="title"
          value={newProduct.title}
          placeholder=" Product name"
          onChange={handleChange}
        />
        <input
          required
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Product price"
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          id=""
        >
          {data?.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <input
          required
          type="text"
          name="images"
          disabled
          // value={newProduct.images}
          // onChange={handleChange}
          placeholder="Product Image "
        />
        <textarea
          required
          onChange={handleChange}
          name="desc"
          value={newProduct.desc}
          id=""
          placeholder="Product description"
        ></textarea>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
