import React, { useState, useEffect } from 'react'
import classes from './ingredients.module.css';
import Navbar from '../navbar/Navbar';
import MealItems from '../mealItems/MealItems'
import IngredientsItems from '../ingredientsItems/IngredientsItems';

const Ingredients = () => {

  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
  const [item,setItem]=useState();
  const [show,setShow]=useState(false);
  const [search,setSearch]=useState("");
  
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
    })
  },[url])

  const searchIngredient = (evt) => {
    if(evt.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
    }
  }

  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.heading}>
            <h1>Ingredientes</h1>
        </div>
        <div className={classes.searchBox}>
            <input type="search" className={classes.searchbar} onChange={e=>setSearch(e.target.value)} onKeyDown={searchIngredient}/>
        </div>
        <div className={classes.container}>
          {
            show ? <IngredientsItems data={item}/>:"Not Found"
          }
        </div>
      </div>
    </div>
  )
}

export default Ingredients