import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

export default function Card({ item }) {
  const dispatch = useDispatch();
  const { title, image, description, category } = item;

  const addtoCart = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <div className="w-72 h-96 rounded overflow-hidden shadow-lg p-3">
      <img className="mx-auto h-44" src={image} alt="Sunset in the mountains" />
      <div className="px-3 py-2">
        <div className="font-bold text-xl mb-1 threedots">{title}</div>
        <p className="text-gray-700 text-base threedots">{description}</p>
      </div>
      <div className="px-3 pt-2 pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{category}
        </span>
      </div>
      <div
        className="me-auto cursor-pointer text-center bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-8"
        onClick={() => {
          addtoCart(item);
        }}
      >
        Add to Cart
      </div>
    </div>
  );
}
