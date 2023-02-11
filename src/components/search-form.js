import getRecipeListByKeyword from "../utils/getRecipeListByKeyword";
import RecipeCategories from "../components/recipe-categories";
import CustomCard from "./custom-card";

class SearchForm extends HTMLElement {
  constructor() {
    super();

    this.classList.add("main-form");
    this.innerHTML = `
    <div class="search__form">
    <h1 class="main-form__title">Cari resep makanan khusus daging!</h1>
        <p class="main-form__desc">Anda dapat mencari resep berdasarkan kata kunci yang Anda masukkan.</p>
        <span class="main-form__search">
        <input
          class="main-form__input"
          type="text"
          name="main-search"
          id="main-search"
          placeholder="rendang, sate dan lain-lain..."
        />
        <button class="main-form__submit" type="submit">Cari</button>
      </span>
    </div>
    <div class="search__result">
    </div>
        `;
  }

  connectedCallback() {
    const submitButton = document.getElementsByClassName("main-form__submit")[0];

    submitButton.addEventListener("click", (event) => {
      const searchInput = document.getElementsByClassName("main-form__input")[0];
      const getSearchResult = async () => {
        const searchResult = await getRecipeListByKeyword(searchInput.value);

        if (searchResult) {
          const resultCategory = new RecipeCategories("Hasil Pencarian");
          searchResult.map((item) => {
            const card = new CustomCard(item.strMeal, item.strMealThumb, item.idMeal);
            resultCategory.children[1].appendChild(card);
            this.children[1].innerHTML = "";
          });

          this.children[1].appendChild(resultCategory);
        } else {
          this.children[1].innerHTML = "";
        }
      };

      getSearchResult();
    });
  }
}

customElements.define("search-form", SearchForm);

export default SearchForm;
