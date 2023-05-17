import React from 'react'
import Styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';



const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {
  return (

    <Wrap bgImage = {backgroundImg}>

<Fade top big>
 
       <ItemText>

        <h1>{title}</h1>

        <p>{description}</p>
       </ItemText>

       <Buttons>

       <ButtonGroup>

         <LeftBtn>

         <Link to="/custom"> {leftBtnText}</Link>
          
         </LeftBtn>

         {rightBtnText && 

           <RightBtn>

         <Link to = "/inventory"> {rightBtnText}</Link>
           </RightBtn>


         }

         
         
         
       </ButtonGroup>

       <DownArrow src = "/images/down-arrow.svg"/>
       </Buttons>
     
     </Fade>

    </Wrap>

  )
}

export default Section

const Wrap = Styled.div`
   width: 100vw; 
  height: 100vh;
  background-size : cover;
  background-position: center;
  background-repeat: no repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props=> `url("images/${props.bgImage}")`}
 
`
const ItemText = Styled.div`

   padding-top: 10vh;
   align-item: center;
   font-size: 1.3rem;

`

const ButtonGroup = Styled.div`
  
  display: flex;
  margin-bottom : 30px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    {
      flex-direction: column;
    }
  }
  
`

const  LeftBtn = Styled.div`

  
   background-color: #393c41;
   height: 40px;
   width: 256px;
   color: black;
   display: flex;
   justify-content : center;
   align-items : center;
   border-radius : 10px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 10px;
   font-weight: bold;
   

   
   
`

const  RightBtn = Styled(LeftBtn)`

background-color: #f4f4f4;

opacity: 65.0%;

color: white;

font-weight: bold;




`

const DownArrow = Styled.img`

margin-top: 20px;
height: 40px;
animation: animateDown infinite 1.5s;
margin-left: 250px;


`

const Buttons = Styled.div`

`



