import React, { useEffect } from 'react'
import { useState } from 'react'
import classes from './meal.module.css'
import Navbar from '../navbar/Navbar'
import MealItems from '../mealItems/MealItems'

const Meal = () => {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=p");
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

  const searchRecipe = (evt) => {
    if(evt.key == "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.heading}>
            <h1>Pesquisar Receitas</h1>
            <h4>Encontre as melhores receitas em nossa ferramenta de busca ._.</h4> 
        </div>
        <div className={classes.searchBox}>
            <input type="search" className={classes.searchbar} onChange={e=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
        </div>
        <div className={classes.container}>
          {
            show ? <MealItems data={item}/>:"Not Found"
          }
        </div>
      </div>
    </div>
  )
}

export default Meal