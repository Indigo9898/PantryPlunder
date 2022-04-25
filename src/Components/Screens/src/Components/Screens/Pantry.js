//main pantry code
import { initializeApp } from "firebase/app";
import IngredientBox from './Parts/IngredientBox';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";


  import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    setPersistence,
    browserSessionPersistence,
    onAuthStateChanged,
    updateProfile
  } from "firebase/auth";


import React, { useState,useEffect} from "react";
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

const userIngredients = atom({
    key: "userIngredients",
    default: []
})

// api settings
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7181964f6dmsh1d395139a2157e1p19f7c1jsn0abdda4d5e9a'
    }
};


//firebase settings
const firebaseConfig = {
    apiKey: "AIzaSyBEl8wAuRj5rXBSohB5puppaYatXEkdJ8U",
    authDomain: "pantryplunder.firebaseapp.com",
    projectId: "pantryplunder",
    storageBucket: "pantryplunder.appspot.com",
    messagingSenderId: "958624352720",
    appId: "1:958624352720:web:e6fd6a1e49c5278b9151d5",
    measurementId: "G-2MFXSKS0EM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let Ingredient = (props) =>{
    const setList = useSetRecoilState(userIngredients);
    const readList = useRecoilValue(userIngredients);

    
    
    let addUserList = (name) =>{
        let duplicate = false;
    

        readList.forEach((item) => {
            if(item.name == name){duplicate = true};
        })
        //exit if duplicate
        if(duplicate == true){return alert("Duplicate")};
        

        setList((oldtasks) =>[
            ...oldtasks,{
              name: name
            }]);
      return(console.log(userIngredients));
        }

    return(
        <div className='ingredient-select-items'>
        <p>{props.name}</p>
        <button onClick={() => addUserList(props.name)}>Add</button> 
    </div>
    )
   
}

let CurrentIngredient = (props) =>{
    const setList = useSetRecoilState(userIngredients);
    const readList = useRecoilValue(userIngredients);
    let savedIngredients = JSON.parse(localStorage.getItem('ingredientList'));

    let deleteUserList = (name, array) =>{
        array.map((item,index) => {
            if(item.name === name){
                array.splice(index, 1);
                localStorage.setItem("ingredientList", JSON.stringify(array));
                setList(array);
                console.log(array);
            }
        })
    }


    return(
        <div className='ingredient-select-items'>
        <p>{props.name}</p>
        <button onClick={() => deleteUserList(props.name, savedIngredients)}>Delete</button> 
    </div>
    )
   
}


let Pantry = (props) =>{
    //States 
    const [style, setStyle] = useState("new-form");
    const [foodName, setFoodName] = useState("");
    const [quanity, setQuanity] = useState("");
    const [user, setUser] = useState("");
    const readList = useRecoilValue(userIngredients);

    const previewList = useRecoilValue(userIngredients);
    
    
    const [savedIngredientList, setSavedIngredientList] = useState([]);
      
      useEffect(() => {
        if(JSON.parse(localStorage.getItem('ingredientList')) != null){
            setSavedIngredientList(JSON.parse(localStorage.getItem('ingredientList')))
        } 

        if(auth.currentUser != null){
            let user = auth.currentUser.displayName
        }else{
            let user = " ";
        }
      }, [savedIngredientList, setSavedIngredientList])
    
    // add ingredient function //Need To Fix Refresh
    const addIngredient = () =>{
       setStyle("new-form");
       localStorage.setItem("ingredientList", JSON.stringify(readList));
       
    }

     
    let newIngredient = () =>{

        setStyle("new-form-active");
    }

    let getRecipesAndSave = () => {
        let storedIngredients = JSON.parse(localStorage.getItem("ingredientList"));
       
        
      
        //create api call
        let  apiVersion = storedIngredients.map((items, index)=>{
                return(
                    items.name.toLowerCase()+'%2C'
                )
        })
      apiVersion[apiVersion.length-1] = storedIngredients[storedIngredients.length-1].name.toLowerCase();
      let apiCall = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=" + apiVersion.join("") + "&number=20&ignorePantry=true&ranking=1"
      
      
      fetch(apiCall, options)
      .then(response => response.json())
      .then(response => {
        // response.map((item,index) => {
            localStorage.setItem("recipeInfo", JSON.stringify(response));
            console.log(response)
        // })
        
      })
      .catch(err => console.error(err));
    }
    
//ingredient index key change if nessicary  //Change to 2d array
//Oils Flower/Sugar Seasoning  0
 let oilIndex = 0;
 //Meats 1
  let meatIndex = 1;
 //Vegetables 2
  let vegeIndex = 2;
 //Eggs/Dairy 3
 let dairyIndex = 3;
 //Fruit 4
 let fruitIndex = 4;
 let ingredients = [
    ['Flour','Sugar','Salt'],
    ['Chicken', 'Beef','Pork',  'Tuna'],
    ['Potatoes','Peas',  'Beans'],
    ['Butter', 'Eggs','Milk', 'Cheese'],
    ['Tomatoes', 'Apple']
 ];


 


 // ingredient component tried to seperate file but need array from this file


    return(
        <div id="pantry-page" className="page">
           
            <section id="ingredient-section">
               <div id='ingredient-text-box'>
                    <h1 className="main-text" id="ingredient-text">{user}  Pantry</h1>
               </div>
             
                <div id="ingredient-area">
                <div id='Current Ingredient Area'>
                    {savedIngredientList.map((item, index) => {
                        return(
                            <CurrentIngredient name={item.name}/>
                        )
                    })}
              </div>
                    {/* //hidden area only show if adding ingreidents */}
                    <div id={style}>
                        <h1>Select Ingredients</h1>
                        <div id="ingredeient-selection">
                            {/* change indexs if needed */}
                            {/* oils and seasonings */}
                            <div className='ingredient-category'>
                                <h1 className='category-ident'>Oils and Seasonings</h1>
                                <div className='select-cat-area'>
                                {ingredients[oilIndex].map((value, key)=>{
                                    return(<Ingredient name={value}/>);
                                })}       
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Meats</h1>
                                <div className='select-cat-area'>
                                 {ingredients[meatIndex].map((value, key)=>{
                                    return(<Ingredient name={value}/>);
                                })}    
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Vegetables</h1>
                                <div className='select-cat-area'>
                                {ingredients[vegeIndex].map((value, key)=>{
                                    return(<Ingredient name={value}/>);
                                })}   
                                </div>       
                            </div>
                            <div  className='ingredient-category'>
                                <h1 className='category-ident'>Dairy and Eggs</h1>
                                <div className='select-cat-area'>
                                {ingredients[dairyIndex].map((value, key)=>{
                                    return(<Ingredient name={value}/>);
                                })}   
                                </div>       
                            </div>
                             <div  className='ingredient-category'>
                                <h1 className='category-ident'>Fruits</h1>
                                <div className='select-cat-area'>
                                {ingredients[fruitIndex].map((value, key)=>{
                                    return(<Ingredient name={value}/>);
                                })}   
                                </div>       
                            </div>
                            <div id='add-area'>
                                <p>Currently Added To List</p>
                                {previewList.map((value,index) =>(
                                    <p>{value.name}</p>
                                ))}
                                <button onClick={()=> addIngredient()}>Confirm Additions</button>
                            </div>
                            
                        </div>
                    </div>
                          
                </div>
               <div id='btn-box'>
                <button onClick={newIngredient} className="btn" id="sub-btn">Add Ingredients </button>
                <button  className="btn" id="sub-btn"><Link onClick={() => {getRecipesAndSave()}} to="/recipes">Get Recipes</Link></button>
               </div> 
            </section>
        </div>
    )
}

export default Pantry;

