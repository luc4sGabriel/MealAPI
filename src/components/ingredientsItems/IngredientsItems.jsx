import React from 'react'
import classes from './ingredientsItems.module.css'
import { useNavigate } from 'react-router';

const IngredientsItems = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {
        (!data) ? "Not Found" : data.map(item => {
          return(
            <div className={classes.card} key={item.idIngredient} onClick={() => {navigate(`/ingredients/${item.strIngredient}`)}}>
              
              <h3>{item.strIngredient}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default IngredientsItems