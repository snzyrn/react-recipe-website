import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import Recipes from '../recipes.json';

function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    const data = Recipes;
    setRecipes(data);
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {recipes.map(recipe => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={recipe.id}>
              <div className="card mb-4" style={{height:"25rem", cursor:"pointer"}}>
                <img
                  src={recipe.imageURL}
                  alt={recipe.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                </div>
                <div className="text-center mb-3">
                  <Link to={`/recipe/${recipe.id}`} className="btn"  style={{border:"2px solid #9ca576",color:"#9ca576"}}>View Recipe</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
