import React from 'react'
import classes from './mealItems.module.css'
import { useNavigate } from 'react-router';

const MealItems = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      { 
        (!data) ? "Not Found" : data.map(item => {
          return(
            <div className={classes.card} key={item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
              <img src={item.strMealThumb} alt=''/>
              <h3>{item.strMeal}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default MealItems