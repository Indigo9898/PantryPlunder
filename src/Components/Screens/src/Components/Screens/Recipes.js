//main recipe code
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

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7181964f6dmsh1d395139a2157e1p19f7c1jsn0abdda4d5e9a'
    }
};

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


  let Recipes = () =>{
      const [recipeInfo, setRecipeInfo] = useState([]);
      
      useEffect(() => {
        if(JSON.parse(localStorage.getItem('recipeInfo')) != null){
          setRecipeInfo(JSON.parse(localStorage.getItem('recipeInfo')))
        }
        
      }, [recipeInfo, setRecipeInfo])

      console.log(recipeInfo);
      return(
          <div class="centered-container">
            <h1>Avaiable Recipes</h1>
            {recipeInfo.map((item,index) => {
                return(
                    <RecipeBox name={item.title} id={item.id}/>
                )
            })}
          </div>
      )
  }

  export default Recipes; 
  
