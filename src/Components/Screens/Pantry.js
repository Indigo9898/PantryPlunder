//main pantry code
import IngredientBox from './Parts/IngredientBox';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

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


let Ingredient = (props) =>{

    const [quanity, setQuanity] = useState("");
    const [unit, setUnit] = useState("gram");
    const setList = useSetRecoilState(userIngredients);
    const readList = useRecoilValue(userIngredients);

    
    
    let addUserList = (name, quanity, unit) =>{
        let duplicate = false;
    

        readList.forEach((item) => {
            if(item.name == name){duplicate = true};
        })
        //exit if duplicate
        if(duplicate == true){return alert("Duplicate")};
        if(quanity == ""){return alert("Enter Quanity")};

        setList((oldtasks) =>[
            ...oldtasks,{
              name: name,
              quanity: quanity,
              unit: unit
            }]);
      return(console.log(userIngredients));
    }

//might not be best

    let deleteUserListItem = (name) =>{
       readList.map((item, index) => {
           if(item.name == name){
               return(readList.splice(index, 1));
           } 
           alert("Not Found");
       })
    }

    return(
        <div className='ingredient-select-items'>
        <p>{props.name}</p>
        <div className='quanity-box'>
            <input value={quanity} type="text" onChange={(e) => setQuanity(e.target.value)}/>
            <select  name="unit" id="quanity-unit-select" value={unit} type="text" onChange={(e) => setUnit(e.target.value)}>
                <option value="grams">Grams</option>
                <option value="ounce">Ounce</option>
                <option value="pounds">Pounds</option>
                <option value="grams">Gallons</option>
                <option value="liters">Liters</option>
            </select>
        </div>
        <button onClick={() => addUserList(props.name, quanity,unit)}>Add</button>
        <button onClick={() => deleteUserListItem(props.name)}>Delete</button>
       
    </div>
    )
   
}



let Pantry = (props) =>{
    //Ingredient List
    const [style, setStyle] = useState("new-form");
    const [foodName, setFoodName] = useState("");
    const [quanity, setQuanity] = useState("");
    const readList = useRecoilValue(userIngredients);

    const previewList = useRecoilValue(userIngredients);
    
    
   
    
    // add ingredient function //Need To Fix Refresh
    const addIngredient = () =>{
       setStyle("new-form");
       localStorage.setItem("ingredientList", JSON.stringify(readList));
    }

     
    let newIngredient = () =>{

        setStyle("new-form-active");
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
                    <h1 className="main-text" id="ingredient-text">Ingredients</h1>
               </div>
               <div id='current-ingredients'>{storedIngredients}</div>
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
                <button onClick={newIngredient} className="btn" id="sub-btn">Submit</button>
               </div> 
            </section>
        </div>
    )
}

export default Pantry;

