import React from 'react'
import Header from './Header'



const CustomOrder = () => {
  return (
    <>

   
 
     <Header/>

     <div className = 'custom-order-header'>

     <h3>Inventory</h3>

     </div>

     <div className = 'custom-order-hero-section'>


     </div>

       <div className = 'custom-options'>


         <select>

             <option>Relevance</option>
             <option>Price: low to high</option>
             <option>Price: high to low</option>
             <option>Milage: low to high</option>
             <option>Milage: high to low</option>
         </select>

       </div>



      
    </>
  )
}

export default CustomOrder



