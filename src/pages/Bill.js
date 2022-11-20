import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Menu from '../Menu';
import Table from 'react-bootstrap/Table';
import arr from './Arr';
import Navbar from './Navbar';

const Bill=({productItems,handleAddProduct,onAdd,cartItems})=> {
 
const {id,image,title,category,price}=productItems;
  const uniqueList=[...new Set(
    productItems.map((curElem)=>{
      return curElem.category;
    })
    
  ),"All",]
  const[foodData,setfoodData]=React.useState(productItems);
  const[quoteList,setquoteList]=React.useState(uniqueList);
  const[select,setfoodSelect]=React.useState(productItems);

  const filterItem=(title)=>
  {
    if(title==="All"){
      setfoodData(productItems);
      return;
    }
   
    const updatedList=productItems.filter((curElem)=>{
      return curElem.category===title;
    })
    setfoodData(updatedList);
  }

  const selectItem=(selected)=>{
    const selecteditemlist=productItems.filter((curElem)=>{
      return curElem.selected===true;
    })
    setfoodSelect(selecteditemlist)
  }


    return (

        <>
       
        bill
        <Navbar filterItem={filterItem} quoteList={quoteList}/>

        <section className='main-container' required='quotes' style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginLeft:"3rem"}}>
{foodData.map((curElem)=>{
  return(<> <Card style={{ width: '18rem' }} key={curElem.id} productItems={productItems} item={cartItems.find((x)=>x.id===productItems.id)} onAdd={onAdd} >
  <Card.Img variant="top" src={curElem.image}  />
  <Card.Body>
    <Card.Title>{curElem.title}</Card.Title>
    <Card.Text>
    ₹ {curElem.price} ({curElem.category})
    </Card.Text>
    {/* <Button  variant="danger" className='m-1'  onClick={()=>{setid(curElem.id);settitle(curElem.title ); setprice(curElem.price);console.log(id,title,price);arr.push(id,title,price);console.log(arr);return id; }} >Add to Cart */}
    {/* { item={title,price,category}} */}

    <Button  variant="danger" className='m-1' onClick={()=>handleAddProduct(productItems)} >Add to Cart


        </Button>
         {/* <Button  variant="danger" className='m-1' onClick={onAdd} >Add to Cart


</Button> */}
       


  </Card.Body>
</Card></>)


})}
  </section>      
        
        </>
   
    );
  }
  
  export default Bill;