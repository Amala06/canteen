import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = ({cartItems,handleAddProduct,onAdd}) => {
    for (let index = 0; index < cartItems.length; index++) {
     console.log(cartItems[index])
        
    }
    const {id,image,title,category,price}=cartItems;

  return (

    <>Cart
        {cartItems.length===0 && (<div>
            No items are added
        </div>)}
<div>


{console.log(cartItems.id)}
{cartItems.map((curElem)=>{
  return(<> 
  <Card style={{ width: '18rem' }} >
    {console.log(curElem,"hhjjjj")}
  {/* <Card.Img variant="top" src={curElem.image}  /> */}
  <Card.Body>
    <Card.Title>{curElem.title}</Card.Title>
    <Card.Text>
    ₹ {curElem.price} ({curElem.quantity})
    </Card.Text>
    {/* <Button  variant="danger" className='m-1'  onClick={()=>{setid(curElem.id);settitle(curElem.title ); setprice(curElem.price);console.log(id,title,price);arr.push(id,title,price);console.log(arr);return id; }} >Add to Cart */}
    <Button  variant="danger" className='m-1'  >Add to Cart


        </Button>
       


  </Card.Body>
</Card></>)


})}
</div>



    </>
  )
}

export default Cart