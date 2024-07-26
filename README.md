[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ud456hEF)
# assignment-module-3

# ABOUT MY ASSIGNMENT :cat: :dog:
The HTML structure is designed to provide a simple and clean layout for the Random Recipe Finder application. The main elements include:

- `<div class="container">`: This is the main container that holds all the content of the application. It is centered and has some padding for spacing.
- `<h1>Random Recipe Finder</h1>`: This is the title of the application, indicating its purpose.
- `<button id="getRecipeBtn">Get Random Recipe</button>`: This button is used to trigger the display of a random recipe when clicked.
- `<div id="recipeContainer" class="recipe-container">`: This container holds the recipe details, including the image, title, and instructions.
- `<img id="recipe-image" src="" alt="Recipe Image" />`: This is the placeholder for the recipe image.
- `<h2 id="recipe-title"></h2>`: This is the placeholder for the recipe title.
- `<p id="recipe-instruction"></p>`: This is the placeholder for the recipe instructions.

The CSS styles are applied to these elements to enhance the visual appeal and layout of the application.

The `main.js` file is the JavaScript code that powers the Random Recipe Finder application. It is responsible for dynamically updating the application's UI with a random recipe when the "Get Random Recipe" button is clicked.

Here's a breakdown of the key functionalities in `main.js`:

1. **Recipe Object**: The script defines a `recipe` object that contains the details of a single recipe, including its title, instructions, and image URL.
2. **onRandomRecipe Function**: This function is triggered when the "Get Random Recipe" button is clicked. It updates the UI with the recipe details as follows:
	* Sets the recipe title in the `<h2>` element with the `id` "recipe-title".
	* Splits the recipe instructions into an array and displays them as a list in the `<p>` element with the `id` "recipe-instruction". The list is styled with bold text and a soft red color.
	* Sets the recipe image URL in the `<img>` element with the `id` "recipe-image" and sets its width to 200 pixels.
	* Hides the "Get Random Recipe" button to prevent multiple clicks.
3. **Event Listener**: The script binds the `onRandomRecipe` function to the "Get Random Recipe" button's click event, ensuring that the function is executed when the button is clicked.

Overall, `main.js` enhances the user experience by dynamically displaying a recipe when the user interacts with the application, making it a simple yet engaging Random Recipe Finder.



click here for check the assignment progress https://beautiful-daifuku-43e243.netlify.app/


##here the looks **[CLICK HERE](https://beautiful-daifuku-43e243.netlify.app/)**
![alt text](image.png)

