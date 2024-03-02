function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "👉The recipy will display here 🥘🍲🍛",
    autoStart: true,
    delay: 80,
    cursor: null,
  });
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
