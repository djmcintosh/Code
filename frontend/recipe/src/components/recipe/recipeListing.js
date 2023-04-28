import Layout from "./layout/Layout";
import RecipeResult from "./recipe/recipeResult";
import Recipe from "./recipe/Recipe";
import React, { useState } from "react";
import recipe from "./recipe";

export default function RecipeListings() {
  const { recipes, setRecipes } = useState([]);
  const { mealType, setMealType } = useState("");
  const { searchTerm, setSearchTerm } = useState("");

  const handleMealType = (e) => {
    setMealType(e.target.value);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRecipe = () => {
    console.log("Searchig for Recipe");
  };

  const setRecipe = (name) => {
    const recipes = setRecipes.find((Recipes) => recipe.name === name);
  };

  <input
    className="mealType"
    type="text"
    value={searchTerm}
    onChange={setSearchTerm}
    id="myInput"
    placeholder="Title..."
  />;

  return (
    <div>
      <Layout>
        <Recipe />
        <RecipeResult />
      </Layout>
    </div>
  );
}
