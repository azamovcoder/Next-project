"use client";

import "./manageCategory.scss";

import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/lib/api/categoryApi";

import { FaEdit } from "react-icons/fa";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const ManageCategory = () => {
  const { data, isLoading } = useGetCategoryQuery();
  const [categoryDelete] = useDeleteCategoryMutation();
  console.log(data);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure? ")) {
      categoryDelete(id);
    }
  };
  return (
    <div className="manage__category">
      <h2 className="manage__category__title">Manage Category</h2>
      <div className="manage__category__cards">
        {data?.map((el) => (
          <div key={el.id} className="manage__category__item">
            <h3>{el.name}</h3>
            <button
              className="manage__category__delete"
              onClick={() => handleDelete(el.id)}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCategory;
