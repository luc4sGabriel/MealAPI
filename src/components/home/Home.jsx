import React, { useState, useEffect } from 'react'
import classes from './home.module.css'
import MealItems from '../mealItems/MealItems'
import Navbar from '../navbar/Navbar'

const Home = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=c");
  const [item,setItem]=useState();
  const [show,setShow]=useState(false);
  
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
    })
  },[url])

  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.heading}>
            <h1>Conheca Nossas Receitas!!</h1>
            <h4>Encontre as melhores receitas em nosso humilde site ._.</h4>
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

export default Home