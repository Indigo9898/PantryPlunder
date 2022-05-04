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
import RecipeDisplay from "./Components/Screens/RecipeDisplay";
import React, { useState } from "react";
import SavedRecipe from "./Components/Screens/SavedRecipe"
import Terms from "./Components/Screens/Terms"

let App = () =>{
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Navigation />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="terms" element={<Terms />} />
          <Route path="pantry" element={<Pantry />} /> 
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipedisplay" element={<RecipeDisplay />} />
          <Route path="savedrecipe" element={<SavedRecipe />} />
        </Route>
      </Routes>
  </Router>
);
  };


export default App;