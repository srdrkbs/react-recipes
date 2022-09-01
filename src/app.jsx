import React from "react";
import TarihTitle from "./DateTest";
import "./index.css";
import RecipeTitle from "./RecipeTitle";

function App() {
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
  };
  var isComplete = 1;
  return (
    <article>
      <RecipeTitle title={recipe.title} />
      <h1>Test Yapılıyor</h1>
      <TarihTitle />
      <div className={isComplete ? "done" : "normal"}>{recipe.title}</div>
    </article>
  );
}

export default App;
