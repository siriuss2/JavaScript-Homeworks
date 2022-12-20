let recipeName = prompt("What is the name of the recipe?");
document.getElementById("recipe-name").innerHTML += " " + recipeName;

let numIngredients = prompt("How many ingredients do we need for the recipe?");
for (let i = 0; i < numIngredients; i++) {
  let ingredient = prompt("Enter the name of ingredient " + (i+1));
  let listItem = document.createElement("li");
  listItem.innerHTML = ingredient;
  document.getElementById("ingredients-list").appendChild(listItem);
}