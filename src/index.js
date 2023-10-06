import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Meal from './components/meal/Meal';
import RecipeByLetter from './components/recipeByLetter/RecipeByLetter';
import Home from './components/home/Home';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import Ingredients from './components/Ingredients/Ingredients';
import RecipeByIngredient from './components/recipeByIngredient/RecipeByIngredient';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/by-letter",
    element: <RecipeByLetter />,
  },
  {
    path: "/by-name",
    element: <Meal />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
  },
  {
    path: "/ingredients/:IngredientName",
    element: <RecipeByIngredient />,
  },
  {
    path: "/:MealId",
    element: <RecipeDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

