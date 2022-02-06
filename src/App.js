import React from "react";
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Profile from "./Components/Profile";




 function App() {
   
  return (
  
   
    <BrowserRouter>

     
       <ul className="navv">
         <li><Link to="/" className="ll">Home</Link></li>
         <li><Link to="/contact" className="ll">Contact</Link></li>
         <li><Link to="/About" className="ll">About</Link></li>
         <li><Link to="/Profile" className="ll">Profile</Link></li>
         
       </ul>
     

     <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/Contact" element= {<Contact/>}/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Profile" element= {<Profile/>}/>
        

     </Routes>
    </BrowserRouter>
    
    
  );
};

export default App;