import ProductWrapper from "../../components/products/ProductWrapper/ProductWrapper";
import React from "react";
import { getData } from "@/app/api/fetchData";

const Products = async () => {
  let data = await getData("/products");
  console.log();

  return (
    <div>
      <ProductWrapper data={data} limit={8} />
    </div>
  );
};

export default Products;
