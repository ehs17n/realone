import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route,  Routes } from 'react-router-dom'; 
import ShopPage from './pages/Shop/shop.component';






function App() {
  return (
    <div>
      
  <Routes>
    
      <Route exact path='/' element={ <HomePage/>} > </Route>
      <Route  path='/Shop' element={ <ShopPage/> } ></Route> 
    
      
  </Routes> 
     
  
    </div>
  );
}

export default App;
