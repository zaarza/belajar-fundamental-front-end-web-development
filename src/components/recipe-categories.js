import CustomCard from "./custom-card";
import getRecipeListByCategory from "../utils/getRecipeListByCategory";

export default class RecipeCategories extends HTMLElement {
  constructor(title) {
    super();
    this.classList.add(`recipe-categories`);

    const titleElement = document.createElement("h1");
    titleElement.classList.add("recipe-categories__title");
    titleElement.textContent = title;
    this.appendChild(titleElement);

    const recipeListElement = document.createElement("div");
    recipeListElement.classList.add("recipe-list");
    this.appendChild(recipeListElement);
  }

  
}

customElements.define(`recipe-categories`, RecipeCategories);
