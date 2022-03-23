//main pantry code
import IngredientBox from './Parts/IngredientBox';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import React, { useState } from "react";
import ingredient from '../../Scripts/assets/ingredient';
import Navigation from '../Screens/Navigation';


let userIngredients = [];


let Ingredient = (props) =>{

    let addUserList = (name, userIngredients) =>{
        userIngredients.push(name);
        console.log(userIngredients);
    }

//might not be best

    let deleteUserListItem = (name, userIngredients) =>{
        for(let i =0; i < userIngredients.length; i++){
            if(userIngredients[i] == name){
                userIngredients.splice(i, 1);
            }
        }
        console.log(userIngredients);
    }

    return(
        <div className='ingredient-select-items'>
        <p>{props.name}</p>
        <button onClick={() => addUserList(props.name, userIngredients)}>Add</button>
        <button onClick={() => deleteUserListItem(props.name, userIngredients)}>Delete</button>
    </div>
    )
   
}

let Pantry = (props) =>{
    //Ingredient List
    const [style, setStyle] = useState("new-form");
    const [foodName, setFoodName] = useState("");
    const [quanity, setQuanity] = useState("");
    const [finalIngredientList, setList] = useState([]);

    // add to localstorage
    let savedIngredients = localStorage.getItem('savedIngredientList');
    const newIngreident = () =>{
        setStyle("new-form-active");   
    }
    
    // add ingredient function
    const addIngredient = () =>{
       setStyle("new-form");
    
    }

     
    
    
//ingredient index key change if nessicary  //Change to 2d array
//Oils Flower/Sugar Seasoning  0-2 
 let oilIndex = 2;
 //Meats 3-6
  let meatIndex = 6;
 //Vegetables 7-9
  let vegeIndex = 9;
 //Eggs/Dairy 10-13
 let dairyIndex = 13;
 //Fruit 14-15
 let fruitIndex = 16;
 let ingredients = ['Flour','Sugar','Salt', 'Chicken', 'Beef','Pork',  'Tuna','Potatoes',
 'Peas',  'Beans', 'Butter', 'Eggs','Milk',    'Cheese', 'Tomatoes', 'Apple'];


 // ingredient component tried to seperate file but need array from this file


    return(
        <div id="pantry-page" className="page">
           
            <section id="ingredient-section">
               <div id='ingredient-text-box'>
                    <h1 className="main-text" id="ingredient-text">Ingredients</h1>
               </div>
                <div id="ingredient-area">
                    {/* //hidden area only show if adding ingreidents */}
                    <div id={style}>
                        <h1>Select Ingredients</h1>
                        <div id="ingredeient-selection">
                            {/* change indexs if needed */}
                            {/* oils and seasonings */}
                            <div className='ingredient-category'>
                                <h1 className='category-ident'>Oils and Seasonings</h1>
                                <div className='select-cat-area'>
                                {ingredients.map((value, key)=>{
                                    if(key < oilIndex){
                                        return(<Ingredient name={value}/>)
                                    }return(null)
                                })
                                }           
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Meats</h1>
                                <div className='select-cat-area'>
                                {ingredients.map((value, key)=>{
                                    if(key > oilIndex && key < meatIndex){
                                        return(<Ingredient name={value}/>)
                                    }return(null)
                                })
                                }           
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Vegetables</h1>
                                <div className='select-cat-area'>
                                {ingredients.map((value, key)=>{
                                    if(key > meatIndex && key < vegeIndex){
                                        return(<Ingredient name={value}/>)
                                    }return(null)
                                })
                                }           
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Dairy and Eggs</h1>
                                <div className='select-cat-area'>
                                {ingredients.map((value, key)=>{
                                    if(key > vegeIndex && key < dairyIndex){
                                        return(<Ingredient name={value}/>)
                                    }return(null)
                                })
                                }           
                                </div>       
                            </div>
                             <div  className='ingredient-category'>
                                <h1 className='category-ident'>Fruits</h1>
                                <div className='select-cat-area'>
                                {ingredients.map((value, key)=>{
                                    if(key > dairyIndex && key < fruitIndex){
                                        return(<Ingredient name={value}/>)
                                    }return(null)
                                })
                                }           
                                </div>       
                            </div>
                            <div id='add-area'>
                                <p>Currently Added To List</p>
                                <button onClick={()=> addIngredient()}>Confirm Additions</button>
                            </div>
                            
                        </div>
                    </div>
                          
                </div>
               <div id='btn-box'>
                <button onClick={newIngreident} className="btn" id="sub-btn">Submit</button>
               </div> 
            </section>
        </div>
    )
}



export default Pantry;