import IngredientBox from './Parts/IngredientBox';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ingredient from '../../Scripts/assets/ingredient';
import Navigation from '../Screens/Navigation';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';

  let RecipeBox = (props) =>{
    let selectedRecipes = "";

    let selectRecipe = (id) => {
       selectedRecipes = id;
       localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipes));
       selectedRecipes = "";
    }
     return(
       <div id='recipe-box'>
           <p>{props.name}</p>
           <button onClick={() => {selectRecipe(props.id)}}><Link to="/recipedisplay">Submit</Link></button>
       </div>
     )
 }
 

  let SavedRecipe = () => {
    const [savedRecipes, setSavedRecipes] = useState(JSON.parse(localStorage.getItem("savedRecipes")))
    console.log(savedRecipes) 
      return(
          <div class="centered-container">
              {savedRecipes.map((item,index) => {
                return(
                    <RecipeBox name={item.rName} id={item.rId}/>
                )
            })}
          </div>
      )
  }

  export default SavedRecipe;