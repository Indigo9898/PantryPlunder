import Pantry from "./Components/Screens/Pantry";
import './Styles/style.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "./Components/Screens/Login";
import SignUp from "./Components/Screens/SignUp"
import Navigation from './Components/Screens/Navigation';
import Recipes from "./Components/Screens/Recipes";
import React, { useState } from "react";

let App = () =>{

  

  return(
    <Router>
      <Routes>
      <Route path="/" element={<Navigation />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="pantry" element={<Pantry />} /> 
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
  </Router>
);
  };


export default App;