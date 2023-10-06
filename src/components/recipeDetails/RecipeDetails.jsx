import React, { useState } from 'react'
import classes from './recipeDetails.module.css'
import { useParams } from 'react-router';
import Navbar from '../navbar/Navbar';

let id = ""

const RecipeDetails = () => {
  const [item,setItem] = useState();
  const {MealId}=useParams();
  if (MealId !=="") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res => res.json()).then(data => {
        setItem(data.meals[0]);  
    })
  }

  if (item){
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length-1];
  }

  return (
    <>
      <Navbar />
      {
        (!item)?"":(<>
          <div className={classes.content}>
            <img src={item.strMealThumb} alt="" />
            <div className={classes.innercontent}>
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea} Comida</h2>
              <h3>Categoria {item.strCategory}</h3>
            </div>
 
            <div className={classes.recipedetails}>

              <div className={classes.ingredients}>
                <h2>Ingredients</h2><br />
                <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
              </div>

              <div className={classes.instructions}>
                <h2>Instructions</h2><br />
                <h4>{item.strInstructions}</h4>
              </div>

            </div>

            <div className={classes.video}>
              <iframe width="
              100%" height="515" title="recipeVideo"
                  src={`https://www.youtube.com/embed/${id}`}>
              </iframe>
            </div>

          </div>
        </>)
      }
    </>
  )
}

export default RecipeDetails

/**
 * - Criar a pesquisa por ingredientes: Utilizar da pesquisa por nome o input,
listar os igredientes em botoes clicaveis
faz um for com uma tag A e uma tag H3 dento do A listando os igre.. da API
Estiliza e xou , so colocar um setState como no de busca com o link
da refeicao e ta massa
 */