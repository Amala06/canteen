import React from 'react'
import hp1 from "../images/hp1.jpg"
import hp2 from "../images/hp2.jpg"
import hp3 from "../images/hp3.png"



import Carousel from 'react-bootstrap/Carousel';
import Food from './Food';


const Home = () => {
  return (
   <>
   


    <Carousel>
      <Carousel.Item interval={1000}>
        <img
// height="700rem"
          src={hp3}
          className="d-block w-100 "
          alt="First slide"
        />
 
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={hp1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={hp2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br/><br/>
    {/* <h4>Specials At Medicaps Canteen</h4> */}
    <Food/>
  
   </>
  )
}

export default Home