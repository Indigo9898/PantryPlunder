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
      return(
        <div>
            <p>{props.name}</p>
        </div>
      )
  }


  let recipeNames = [];

  let Recipes = () =>{
      
      const [recipeName, setList] = useState([]);
      

        useEffect(() =>{
            //bug works second refresh ugh
                //getting recipes and the ingredient list
                let storedIngredients = JSON.parse(localStorage.getItem("ingredientList"));
                //create api call
                let  apiVersion = storedIngredients.map((items, index)=>{
                        return(
                            items.name.toLowerCase()+'%2C'
                        )
                })
            apiVersion[apiVersion.length-1] = storedIngredients[storedIngredients.length-1].name.toLowerCase();
            let apiCall = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + apiVersion.join("") + "&number=20&ignorePantry=true&ranking=1"
            console.log(apiCall);


            fetch(apiCall, options)
            .then(response => response.json())
            .then(response => {
                response.map((item,index) => {
                    return(
                        recipeNames[index] = item.title
                    )
                })
            })
            .catch(err => console.error(err));
         
            console.log(recipeNames);
        }) 

        

      return(
          <div>
            <h1>Avaiable Recipes</h1>
            {recipeNames.map((item,index) => {
                return(
                    <RecipeBox name={item}/>
                )
            })}
          </div>
      )
  }

  export default Recipes; 
  
