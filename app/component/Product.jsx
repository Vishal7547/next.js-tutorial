import React from "react";

const Product = ({ title, price }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h4>Title: {title}</h4>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Product;
