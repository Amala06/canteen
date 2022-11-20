import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Navbar = ({filterItem ,quoteList}) => {
  return (
<>
<nav className='navabr'>
     {/* <div className="btn-group"> */}
     <ButtonToolbar aria-label="Toolbar with button groups" style={{marginLeft:"3rem",marginRight:"3rem"}}>
      <ButtonGroup className="me-2" aria-label="First group" style={{display:"flex",flexWrap:"wrap"}}>
         {
             quoteList.map((curElem)=>{
                 return(
                // <button className="btn-itm" onClick={()=>filterItem(curElem)}>{curElem}</button>
                <Button style={{border:"1px solid #cc202e",background:"transparent",color:"#cc202e"}} onClick={()=>filterItem(curElem)}>{curElem}</Button> 
              ) })
         }
       
      


   
       
      </ButtonGroup>
     
    </ButtonToolbar>





   </nav>
   <br /><br /></>
  )
}

export default Navbar