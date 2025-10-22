import React from "react"
import IngredientsList from "/component/IngredientsList.jsx"
import ClaudeRecipe from "/component/ClaudeRecipe.jsx"
import { getRecipeFromChefClaude } from "../src/ai.js"


export default function Main() {

    // Creating a 
    const [recipe, setRecipe] = React.useState("")

    // When click 'get recipe' it should flip the boolean value of recipe
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    const [ingredients, setIngredients] = React.useState(['tomatoes', 'oregano', 'onions', 'cabbage', 'porc'])

    // Including forms in react
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} getRecipe={getRecipe} /> : null}
            {recipe ? <ClaudeRecipe recipe={recipe}/> : null}
        </main>
    )
}