import React from "react";
// TODO: Create RecipeTitle component
function RecipeTitle(props) {
  const number = 5;
  console.log(number % 2 ? "The number is odd" : "The number is even");

  return (
    <section>
      <h2>{props.title}</h2>
    </section>
  );
}

export default RecipeTitle;
