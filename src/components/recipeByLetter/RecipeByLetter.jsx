import React,{ useState, useEffect } from "react";
import classes from "./recipeByLetter.module.css"
import Navbar from "../navbar/Navbar";
import MealItems from "../mealItems/MealItems";

const RecipeByLetter = ({alphaIndex}) => {
   const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   let num=0;

   const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
   const [item,setItem]=useState();
   const [show,setShow]=useState(false);
   
   useEffect(()=>{
     fetch(url).then(res=>res.json()).then(data=>{
       console.log(data.meals);
       setItem(data.meals);
       setShow(true);
     })
     },[url])

     const setIndex=(alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
     }

   return (
        <div>
            <Navbar />
            <div className={classes.main}>
                <div className={classes.indexContainer}>
                    <div className={classes.heading}>
                        <h3>Pesquise Receitas por letra ._.</h3>
                    </div>
                    <>
                    {   
                        alpha.map(item => {
                            return(
                        <   div className={classes.numBox} key={num++} onClick={()=>alphaIndex(item)}>
                                <h3 className={classes.hoverH3}>{item}</h3>
                            </div>)
                        })
                    }
                    </>
                </div>
                <div className={classes.container}>
                    {
                        alphaIndex=(alpha)=>setIndex(alpha)
                    }
                    
                    {
                        show ? <MealItems data={item}/>:"Not Found"
                    }
                </div>
            </div>
        </div>
    )
}
export default RecipeByLetter;