/**
 * @author Marco Tranaso
 * @description This object holds information about a favorite recipe, including its title, servings, and ingredients.
 */

/**
 * @typedef {Object} Recipe
 * @property {string} title - The name of the recipe.
 * @property {number} servings - The number of servings for the recipe.
 * @property {Array<string>} ingredients - An array of ingredients needed for the recipe.
 */

/**
 * @constant {Recipe} myRecipe - An object that stores the details of a favorite recipe.
 * @example 
 * {
 *   title: "Spaghetti Aglio e Olio",
 *   servings: 2,
 *   ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Chili flakes", "Parsley"]
 * }
 */
const myRecipe = {
    title: "Spaghetti Aglio e Olio",
    servings: 2,
    ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Chili flakes", "Parsley"]
};

// Logging recipe information
console.log(`Recipe Title: ${myRecipe.title}`);
console.log(`Servings: ${myRecipe.servings}`);
console.log("Ingredients:");
myRecipe.ingredients.forEach(ingredient => {
    console.log(`- ${ingredient}`);
});

// Bonus: Array to hold multiple recipes
const recipes = [
    {
        title: "Spaghetti Aglio e Olio",
        servings: 2,
        ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Chili flakes", "Parsley"]
    },
    {
        title: "Margherita Pizza",
        servings: 4,
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"]
    },
    {
        title: "Tiramisu",
        servings: 6,
        ingredients: ["Ladyfingers", "Mascarpone", "Eggs", "Sugar", "Coffee", "Cocoa powder"]
    }
];

// Logging all recipes
console.log("\nAll Recipes:");
recipes.forEach(recipe => {
    console.log(`Title: ${recipe.title}`);
    console.log(`Servings: ${recipe.servings}`);
    console.log("Ingredients:");
    recipe.ingredients.forEach(ingredient => {
        console.log(`- ${ingredient}`);
    });
    console.log(""); // Blank line between recipes
});
