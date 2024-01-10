// import Image from 'next/image'
"use client";
import ExampleClient from "@/components/ExampleClient";
import ServerComponents from "@/components/serverComponents";
import "./style.css";
import styles from "./page.module.css";

export default function Home() {
  const clickMe = () => {
    alert("wahh! great its working");
  };
  console.log("where do i render");
  return (
    <main>
      hello
      {/* <h2>hello</h2>
      <ExampleClient />
      <ServerComponents /> */}
      {/* <button onClick={clickMe}>please click me</button> */}
    </main>
  );
}
