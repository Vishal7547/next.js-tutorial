"use client";

import React from "react";

const ProductBtn = ({ price }) => {
  return (
    <div>
      <button onClick={() => console.log(price)}>Click me</button>
    </div>
  );
};

export default ProductBtn;
