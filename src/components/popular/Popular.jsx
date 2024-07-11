import "./Popular.scss";

import ProductWrapper from "../products/ProductWrapper/ProductWrapper";
import React from "react";
import { getData } from "@/app/api/fetchData";

const Popular = async () => {
  let data = await getData("/products");
  return (
    <div>
      <div className="popular container">
        <h2 className="popular__title">Popular</h2>
        <p className="popular__desc">
          Our top selling product that you may like
        </p>
        <ProductWrapper data={data} limit={4} />
      </div>
    </div>
  );
};

export default Popular;
