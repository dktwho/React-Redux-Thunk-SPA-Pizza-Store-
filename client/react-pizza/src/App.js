import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages'
import { fetchPizzas } from "./redux/action/pizzas";
import { useDispatch } from 'react-redux'

function App () {
  const dispatch = useDispatch();
  

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
  </div>

  )
}



export default App;

