import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/recipeDetails/RecipeDetails';
import Meal from './components/meal/Meal';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar />
            <Meal />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/MealId' element={<RecipeDetails />} />
            </Routes>
        </div>
    )
}

export default App;
