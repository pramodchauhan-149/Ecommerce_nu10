import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Component/Card";
import Slider from "../Component/Slider";

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetch_data = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.status === 200 ? response.data : []);
  };
  console.log("fetch data function");
  useEffect(()=>{fetch_data()} , []);
  return (
    <>
      <h1 className="hidden md:block text-center text-blue-200 text-4xl mb-4">
        Welcome to StyleCart 🔥
      </h1>
      <Slider />
      <div className="container px-4 flex flex-wrap mt-10 gap-5 justify-center">
        {product.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
}
