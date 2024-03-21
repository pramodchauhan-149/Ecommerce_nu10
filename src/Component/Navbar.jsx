import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar({ title }) {
  const navigate = useNavigate()
  const cart = useSelector(state=>state);
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <nav className="h-14 border shadow flex items-center px-5 sticky top-0 z-50">
      <h1 className="text-2xl text-gray-400">{title}</h1>
      <div className=" ms-auto flex justify-center items-center h-[80%] w-32 rounded bg-yellow-200" onClick={()=>{
        navigate('/cart')
      }}>
        <i className="fi fi-rr-shopping-cart me-2"></i>
       <h1> {cart?.length} </h1>
      </div>
    </nav>
  );
}
//  