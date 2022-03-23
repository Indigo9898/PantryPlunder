


let IngredientBox = (props) =>{
    return(
        <div id="ingredient-box">
            <p  className="ingredient-box-item" className="main-text">{props.name}</p>
            <p  className="ingredient-box-item" className="main-text">{props.quanity}</p>
            <button className="ingredient-box-item" className="btn" >Delete</button>
        </div>
    )
}

export default IngredientBox;