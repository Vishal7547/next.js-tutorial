"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductBtn = ({ id }) => {
  const router = useRouter();
  const handleClick = () => {
    console.log(id, "id");

    router.push(`/products/${id}`);
  };
  return <button onClick={handleClick}>Go to product</button>;
};

export default ProductBtn;
