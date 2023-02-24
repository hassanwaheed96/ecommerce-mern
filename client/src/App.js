import "./App.css";
import React, { createContext, useState } from "react";
import Home from "./components/home/home";
import {Products} from "./components/products/products";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/cart";

export const GetData = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState([]);


  return (
    <>
    <h1>Helloooo</h1>
    </>
  );
}

export default App;
