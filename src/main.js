// Define the recipe object
const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

// Function to handle displaying the recipe
function onRandomRecipe() {
    // Set the recipe title
    document.getElementById('recipe-title').textContent = recipe.title;

    // Set the recipe instructions
    document.getElementById('recipe-instruction').textContent = recipe.instructions;

    // Set the recipe image
    const imageElement = document.getElementById('recipe-image');
    imageElement.src = recipe.image;
    imageElement.style.width = '200px';

    // Hide the button
    const button = document.getElementById('getRecipeBtn');
    button.style.display = 'none';
}


// Bind the function to the button click event
document.getElementById('getRecipeBtn').addEventListener('click', onRandomRecipe);
