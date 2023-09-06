import Populer from "../components/Populer";
import React from 'react'
import foodPlate from '../img/foodPlate.png'


function Home() {
  return (
    <div>
      <section style={{ display: "flex", alignItems:"center"}}>
        <div className="container">
          <img src={foodPlate} alt="Food Plate" style={{ width: "35rem" }} />
        </div>
        <div>
          <h1>Welcome to RecipeGem!</h1>
          <p style={{marginRight:"10rem", fontSize:"1.2rem"}}>We are delighted to have you here in our flavorful world. Get ready to embark on a delightful journey filled with the most delicious recipes. Enjoy your meal!</p>
        </div>
      </section>
      <Populer />
    </div>

  )
}

export default Home