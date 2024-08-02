// Function to fetch a random recipe from TheMealDB API
async function fetchRandomRecipe() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals[0]; // Return the first meal from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null if there's an error
  }
}

// Function to handle displaying the recipe
function displayRecipe({ title, category, instructions, imageUrl, ingredients, youtubeUrl }) {
  // Set the recipe title
  const recipeTitle = document.getElementById('recipe-title');
  recipeTitle.textContent = title;

  // Set the recipe category and show the category box
  const recipeCategory = document.getElementById('recipe-category');
  recipeCategory.innerHTML = `<h3>Category</h3> ${category}`;
  recipeCategory.style.display = 'block'; // Show the category box
  
  // Set the recipe image
  const recipeImage = document.getElementById('recipe-image');
  recipeImage.src = imageUrl;
  recipeImage.style.width = '200px';

  // Set the recipe ingredients
  const recipeIngredients = document.getElementById('recipe-ingredients');
  recipeIngredients.innerHTML = '';

  // Create and append the title for ingredients
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.textContent = 'Ingredients';
  ingredientsTitle.style.fontWeight = 'bold';
  recipeIngredients.appendChild(ingredientsTitle);

  // Create a numbered list to hold the ingredients
  const ol = document.createElement('ol');
  ol.style.textAlign = 'left'; // Align text to the left

  ingredients.forEach(({ ingredient, measure }) => {
    const li = document.createElement('li');
    li.textContent = `${ingredient}: ${measure}`;
    ol.appendChild(li);
  });

  // Append the list to the ingredients container
  recipeIngredients.appendChild(ol);

  // Set the recipe instructions in paragraphs
  const recipeInstructions = document.getElementById('recipe-instruction');
  const instructionsArray = instructions.split('\n');

  // Clear any existing instructions
  recipeInstructions.innerHTML = '';

  // Create and append the title for instructions
  const instructionTitle = document.createElement('h3');
  instructionTitle.textContent = 'Cooking Instructions';
  instructionTitle.style.fontWeight = 'bold';
  recipeInstructions.appendChild(instructionTitle);

  // Add each instruction as a paragraph
  instructionsArray.forEach(instruction => {
    if (instruction.trim() !== '') {
      const p = document.createElement('p');
      p.textContent = instruction.trim();
      recipeInstructions.appendChild(p);
    }
  });

  // Add YouTube video link if available
  const recipeYoutube = document.getElementById('recipe-youtube');
  if (youtubeUrl) {
    recipeYoutube.innerHTML = `<h3 style="font-weight: bold;">Video Recipe</h3><a href="${youtubeUrl}" target="_blank">Watch on YouTube</a>`;
    recipeYoutube.style.display = 'block'; // Show the YouTube box
  } else {
    recipeYoutube.style.display = 'none'; // Hide the YouTube box if no URL
  }

  // Reset and show the recipe container with animation
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.classList.remove('show'); // Remove the class to reset the animation
  void recipeContainer.offsetWidth; // Trigger a reflow
  recipeContainer.classList.add('show'); // Re-add the class to start the animation
}

// Function to handle fetching and displaying the random recipe
async function onRandomRecipe() {
  const meal = await fetchRandomRecipe();
  if (meal) {
    // Extract ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }

    // Call displayRecipe with an object
    displayRecipe({
      title: meal.strMeal,
      category: meal.strCategory,
      instructions: meal.strInstructions,
      imageUrl: meal.strMealThumb,
      ingredients,
      youtubeUrl: meal.strYoutube
    });
  } else {
    console.log('No meal data available');
  }
}

// Bind the function to the button click event
document.getElementById('getRecipeBtn').addEventListener('click', onRandomRecipe);
