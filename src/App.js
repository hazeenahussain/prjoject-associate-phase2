import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
// import Content from './Components/Content';
import Footer from './Components/footer/Footer';
// import About from './Components/About';
import Home from './Components/home/Home';

import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Associatehome from './Components/associatehome/Associatehome';
import Bookhall from './Components/bookhall/Bookhall';

import Bookings from './Components/bookings/Bookings';


function App() { 
  return (
    
    <Router>
      <Navigation/>
      <Sidebar/> 
          
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="Associatehome" element={<Associatehome/>}/>
       <Route path="Bookhall" element={<Bookhall/>}/>
       <Route path="Bookings" element={<Bookings/>}/>
      </Routes>
      <Footer/> 
      </Router>         
     
  
  );
}

export default App;
