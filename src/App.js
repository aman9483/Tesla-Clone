import './index.css';
import './App.css';
import Home from './components/Home';
import Header from './components/Header'
import CustomOrder from './components/CustomOrder';
import Inventory from './components/Inventory';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

       <BrowserRouter>
       
         <Routes>

        

         <Route exact path="/" element={<><Header/><Home/></>}/>
         <Route path="custom" element={<CustomOrder />} />
         <Route path="inventory" element={< Inventory />} />
         

         
         </Routes>
       
       </BrowserRouter>

   
  );
}

export default App;
