import logo from './logo.svg';
import './App.css';
import Foodcard from './pages/Foodcard';
import Food from './pages/Food';
import Navbar from './pages/Navbar';
import Menu from './Menu';
import React from 'react';
import Bill from './pages/Bill';
import Mainnav from './component/Mainnav'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Routeroot from './Routepath/Routhpath';
import Routhpath from './Routepath/Routhpath';
function App() {

  const {productItems}=Menu;
  const [cartItems,setCartItems]=React.useState([]);
  // const{id,title,image,price,category}=Items;
  const handleAddProduct=(product)=>{
    // console.log(product.id,'hh');
   
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id===product.id?
      {...ProductExist,quantity:ProductExist.quantity + 1}:item)
      );
    }else{
        setCartItems([...cartItems,{...product,quantity:1}])
      }
      console.log(product,'shubham');
      // console.log(cartItems,'sona')
    
  

    // const titleExist=cartItems.find((item)=>item.title===product.title);
    // if(titleExist){
    //   setCartItems(cartItems.map((item)=>item.title===product.title?
    //   {...titleExist,title:titleExist.title + "s"}:item)
    //   );
    // }else{
    //     setCartItems([...cartItems,{...product,title:1}])
    //   }
    //   console.log(product,'shubham');
    
    }
    const onAdd=()=>{
      console.log("added");
    }




      // console.log(cartItems,'sona')}
    
  return (
  <>


  <BrowserRouter>

  <Mainnav />
  <Routhpath productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} onAdd={onAdd}/>
  </BrowserRouter>




  </>
  );
}

export default App;
