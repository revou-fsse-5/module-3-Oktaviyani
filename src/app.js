// Define the recipe object
const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
      "Cook spaghetti according to package instructions. In a separate pan, cook pancetta until crispy. In a bowl, whisk eggs and grated cheese. Combine spaghetti, pancetta, and egg mixture, stirring quickly. Serve immediately with additional cheese and black pepper",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  };
  
  // Function to handle displaying the recipe
  function onRandomRecipe() {
    // Set the recipe title
    const recipeTitle = document.getElementById('recipe-title');
    recipeTitle.textContent = recipe.title;
  
    // Set the recipe instructions in list style
    const recipeInstructions = document.getElementById('recipe-instruction');
    const instructionsArray = recipe.instructions.split('. ');
  
    // Clear any existing instructions
    recipeInstructions.innerHTML = '';
  
    // Create a list to hold the instructions
    const ul = document.createElement('ul');
    ul.style.fontWeight = 'bold'; // Make text bold
    ul.style.color = '#f12c7e'; // Set text color to soft red
  
    // Add each instruction as a list item
    instructionsArray.forEach(instruction => {
      if (instruction.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = instruction.trim() + '.';
        ul.appendChild(li);
      }
    });
  
    // Append the list to the instructions container
    recipeInstructions.appendChild(ul);
  
    // Set the recipe image
    const recipeImage = document.getElementById('recipe-image');
    recipeImage.src = recipe.image;
    recipeImage.style.width = '200px';
  
    // Hide the button
    const getRecipeBtn = document.getElementById('getRecipeBtn');
    getRecipeBtn.style.display = 'none';
  }
  
  // Bind the function to the button click event
  document.getElementById('getRecipeBtn').addEventListener('click', onRandomRecipe);
  