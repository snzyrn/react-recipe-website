import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from '../recipes.json';
import Populer from '../components/Populer';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = Recipes.find((recipe) => recipe.id === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="mt-5" style={{fontSize:"2rem", marginLeft:"2rem"}}>Sorry! The recipe you were looking for was not found.</div>;
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="mb-4 text-center mt-4">{recipe.name}</h2>
          <img
            src={recipe.imageURL}
            alt={recipe.name}
            style={{borderRadius:"5px", width:"22rem", height:"20rem", marginLeft:"10rem"}}
          />
        </div>
        <div className="col-md-6 mt-5">
          <div>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name} ({ingredient.type})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Steps:</h4>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Populer />
    </div>
  );
}

export default RecipeDetail;
