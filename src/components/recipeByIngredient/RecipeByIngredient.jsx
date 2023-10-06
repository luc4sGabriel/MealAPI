import React, { useState } from 'react'
import classes from './recipeByIngredients.module.css'
import { useParams } from 'react-router';
import Navbar from '../navbar/Navbar';
import MealItems from '../mealItems/MealItems';

const RecipeByIngredient = () => {

    const {IngredientName}=useParams();
    const [item,setItem] = useState();
    const [show,setShow]=useState(false);

    if (IngredientName !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientName}`).then(res => res.json()).then(data => {
          console.log(data.meals);
          setItem(data.meals);
          setShow(true);  
        })
      }

  return (
    <>
        <Navbar/>
        <div className={classes.container}>
          {
            show ? <MealItems data={item}/>:"Not Found"
          }
        </div>
    </>
  )
}

export default RecipeByIngredient