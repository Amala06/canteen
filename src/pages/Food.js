import React, { useState } from 'react'
import Menu from '../Menu';
import Foodcard from './Foodcard';
import Navbar from './Navbar';
import Bill from './Bill';

const uniqueList=[...new Set(
  Menu.productItems.map((curElem)=>{
    return curElem.category;
  })
  
),"All",]

const Food = ({productItems}) => {
    const[foodData,setfoodData]=React.useState(Menu.productItems);
    const[quoteList,setquoteList]=React.useState(uniqueList);
    const[select,setfoodSelect]=React.useState(Menu.productItems);

    const filterItem=(title)=>
    {
      if(title==="All"){
        setfoodData(Menu.productItems);
        return;
      }
     
      const updatedList=Menu.productItems.filter((curElem)=>{
        return curElem.category===title;
      })
      setfoodData(updatedList);
    }

    const selectItem=(selected)=>{
      const selecteditemlist=Menu.productItems.filter((curElem)=>{
        return curElem.selected===true;
      })
      setfoodSelect(selecteditemlist)
    }


  return (
   <>
   <Navbar filterItem={filterItem} quoteList={quoteList}/>
 <Foodcard foodData={foodData} />
   {/* <Bill cardItems={cardItems} handleevent={handleevent}/> */}

{/* <Bill  selectItem={selectItem} select={select}/> */}

   </>
  )
}

export default Food