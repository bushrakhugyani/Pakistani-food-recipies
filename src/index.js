function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
    cursor: null,
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let recipeNameInput = document.querySelector("#recipe-name");
  let apiKey = "98f12063t8f0b4be43fb6oa12441998c";
  let prompt = `Generate a Pakistani food recipe of ${recipeNameInput.value}`;
  let context =
    "Generate a Pakistani food recipe in short sentences on the bases of the user instruction in input and display the answer in HTML numbers format,   Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating Pakistani food recipe of ${recipeNameInput.value}</div>`;
  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
