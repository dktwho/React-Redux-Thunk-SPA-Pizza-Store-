import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
// import store from './redux/store'
import setPizzas from "./redux/action/pizzas";
import { connect } from 'react-redux'

function App ({ setPizzas, items }) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({ data }) => {setPizzas(data.pizzas)})   
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

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
    dispatch,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
