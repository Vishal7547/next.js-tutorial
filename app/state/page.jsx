"use client";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

export default page;
