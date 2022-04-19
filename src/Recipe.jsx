import React from "react";

import style from './recipe.module.css'


const Recipe = ({title,calories,image,ingredients, directions}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                    ))}
            </ol>
            <p>{calories.toFixed()} Calories</p>
            <img className={style.images}src={image} alt=''/>
            <h4 className={style.h4}>Recipe:</h4>
            <a href={directions}className={style.a} target="_blank">{directions}</a>
        </div>
    );
}


export default Recipe;