import React from 'react'
import {Routes,Route} from "react-router-dom";
import Bill from '../pages/Bill';
import Cart from '../pages/Cart';
import Food from '../pages/Food';
import Home from '../pages/Home';

const Routhpath = ({productItems,cartItems,handleAddProduct,onAdd}) => {
  return (
    // <div>Routhhe</div>
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/food' element={<Food productItems={productItems}/>}/>
      <Route path='/bill' element={<Bill productItems={productItems} handleAddProduct={handleAddProduct} onAdd={onAdd} cartItems={cartItems}/>} />
      <Route path='/cart' element={<Cart cartItems={cartItems}  handleAddProduct={handleAddProduct} onAdd={onAdd}/>}/>
    </Routes>
    </>
  )
}

export default Routhpath