import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
// import store from './redux/store'
import setPizzas from "./redux/action/pizzas";
import { useSelector, useDispatch } from 'react-redux'

function App () {
 const dispatch = useDispatch();
 const { items } = useSelector(({ pizzas, filters }) => {
  return {
    items: pizzas.items,
    // sortBy: filters.sortBy,
  }
 });


  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
  </div>

  )
}



export default App;

