"use client";
import { useState, useEffect } from "react";

const clientApi = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      {product?.map((x) => {
        return (
          <div key={x.id}>
            <p>{x.title}</p>
            <p>{x.category}</p>
            <p>{x.price}</p>
            <p>{x.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default clientApi;
