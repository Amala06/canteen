import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Bill from './Bill';
import arr from './Arr';
import Menu from '../Menu';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Menu from '../Menu';
import Table from 'react-bootstrap/Table';




const Foodcard = ({foodData}) => {

    // const[title,settitle]=React.useState('');
    // const[price,setprice]=React.useState('');
    // const[id,setid]=React.useState('');
    // const[select,setfoodSelect]=React.useState(Menu);

    // const selectItem=(selected)=>{
    //   const selecteditemlist=Menu.filter((curElem)=>{
    //     return curElem.selected===true;
    //   })
    //   setfoodSelect(selecteditemlist)
    // }


    // const arr=[];
    const selection=()=>{
      foodData.section=true;
      console.log("selected")
      console.log(foodData.title);
    }


    // for (let index = 0; index < foodData.length; index++) {
    // if(foodData[index].selected===true){
    //   console.log(foodData.title);
    // }
      
    // }
 
    console.log(foodData);
  return (
    <>
    <section className='main-container' required='quotes' style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginLeft:"3rem"}}>
{foodData.map((curElem)=>{
  
    return(
        
        <>
  
  <Card style={{ width: '18rem' }} key={curElem.id}>
      <Card.Img variant="top" src={curElem.image}  />
      <Card.Body>
        <Card.Title>{curElem.title}</Card.Title>
        <Card.Text>
        ₹ {curElem.price} ({curElem.category})
        </Card.Text>
        {/* <Button  variant="danger" className='m-1'  onClick={()=>{setid(curElem.id);settitle(curElem.title ); setprice(curElem.price);console.log(id,title,price);arr.push(id,title,price);console.log(arr);return id; }} >Add to Cart */}
        <Button  variant="danger" className='m-1'  onClick={()=>{curElem.selection=true;console.log(curElem.title);arr.push(curElem.id);console.log(arr);}} >Add to Cart

         {/* {console.log(foodData)} */}
            </Button>
            <Link to='/bill' style={{marginLeft:"1rem"}}>View Cart</Link> 

   
      </Card.Body>
    </Card>
{/* <Bill foodData={foodData}/> */}

        </>
    )
})

    }

{/* <Bill /> */}
</section>
</>
    
  )
}
// export{ arr};
export default Foodcard;