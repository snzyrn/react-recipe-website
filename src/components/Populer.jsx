import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import Recipes from '../recipes.json';
import 'bootstrap/dist/css/bootstrap.css';

function Populer() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopulerRecipes();
  }, []);

  const getPopulerRecipes = () => {
    const data = Recipes;
    const popularRecipesData = data.slice(0, 4);
    setPopularRecipes(popularRecipesData);
  }

  return (
    <div className="container">
      <h3 className="mb-3">Popular Recipes</h3>
      <div className="row justify-content-center"> 
        {popularRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-3 mb-3"> 
            <div className="card" style={{ width: "90%"}}> 
              <img className="card-img-top" src={recipe.imageURL} alt={recipe.name} style={{ width: "100%",height:"12rem" }} />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <Link to={`/recipe/${recipe.id}`} className="btn" style={{border:"2px solid #9ca576",color:"#9ca576", cursor:"pointer"}}>View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populer;
