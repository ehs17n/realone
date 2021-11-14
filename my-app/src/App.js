import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route,  Routes } from 'react-router-dom'; 
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component';






function App() {
  return (
    <div>
      <Header/>
  <Routes>
    
      <Route exact path='/' element={ <HomePage/>} > </Route>
      <Route  path='/Shop' element={ <ShopPage/> } ></Route> 
    
      
  </Routes> 
     
  
    </div>
  );
}

export default App;
