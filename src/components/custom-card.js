import getRecipeDetailsById from "../utils/getRecipeDetailsById";
import showModalBox from "../utils/showModalBox";

export default class CustomCard extends HTMLElement {
  constructor(title, imageLink, id) {
    super();

    const detailButtonHandler = () => {
      const getDetail = async (id) => {
        const data = await getRecipeDetailsById(id);
        showModalBox(data.strMeal, data.strInstructions, data.strMealThumb, data.strCategory, [
          data.strIngredient1,
          data.strIngredient2,
          data.strIngredient3,
          data.strIngredient4,
          data.strIngredient5,
          data.strIngredient6,
          data.strIngredient7,
          data.strIngredient8,
          data.strIngredient9,
          data.strIngredient10,
        ]);
      };

      getDetail(id);
    };

    this.classList.add(`food-card__container`);
    this.innerHTML = `
    <div class="food-card" id=${id}>
          <div class="food-card__thumbnail">
              <img src="${imageLink}" alt="${title}" class="food-card__img">
          </div>
          <div class="food-card__body">
            <h2 class="food-card__title">${title}</h2>
            <button class="food-card__button">Lihat resep</button>
          </div>
        </div>`;

    const button = this.getElementsByClassName("food-card__button")[0];
    button.addEventListener("click", (event) => {
      const id = event.target.parentElement.parentElement.getAttribute("id");
      detailButtonHandler(id);
    });
  }
}

customElements.define("custom-card", CustomCard);
