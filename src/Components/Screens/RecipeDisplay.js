
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

let recipeInfos = {};
let savedRecipeId = JSON.parse(localStorage.getItem("selectedRecipe"));

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + savedRecipeId + "/information", options)
.then(response => response.json())
.then(response => {
    recipeInfos = response
})
.catch(err => console.error(err));

let RecipeDisplay = () =>{
    const [savedRecipeId, setRecipeId] = useState("");
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeTime, setRecipeTime] = useState("");
    const [recipeImage, setRecipeImage] = useState("");
    const [recipeInstructions, setRecipeInstrcutions] = useState("");

    useEffect(() => {
        let savedRecipeId = JSON.parse(localStorage.getItem("selectedRecipe"));

        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + savedRecipeId + "/information", options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setRecipeTitle(response.title);
            setRecipeImage(response.image);
            setRecipeTime(response.readyInMinutes);
            setRecipeInstrcutions(response.instructions);
            setRecipeId(savedRecipeId)
        })
        .catch(err => console.error(err));        
    })

    let saveRecipe = (rID, rName) => {
        let tempRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
        if(tempRecipes == null){
            tempRecipes = [{rId: rID, rName: rName}]
            localStorage.setItem("savedRecipes", JSON.stringify(tempRecipes));
        }else{
            tempRecipes = [tempRecipes, {rId: rID, rName: rName}]
            localStorage.setItem("savedRecipes", JSON.stringify(tempRecipes));
        }
        
    }
    
    return(
        <div class="centered-container">
            <h1>{recipeTitle}</h1>
            <img src={recipeImage} alt="recipe image" />
            <h1>Instructions</h1>
            <p>Time Ready: {recipeTime} </p>
            <p>{recipeInstructions}</p>
            <button onClick={() => {saveRecipe(savedRecipeId, recipeTitle)}}>Save Recipe</button>
        </div>
    )
}

export default RecipeDisplay;