import "./assets/css/style.css";
import CustomCard from "./components/custom-card";
import RecipeCategories from "./components/recipe-categories";
import getRecipeListByCategory from "./utils/getRecipeListByCategory";
import SearchForm from "./components/search-form";
import CustomBanner from "./components/custom-banner";

// banner
document.body.appendChild(new CustomBanner());

// main search
document.body.appendChild(new SearchForm());

// kategori daging sapi
const beefCategory = new RecipeCategories("Seafood");
const getbeefCategoryItems = async () => {
  const items = await getRecipeListByCategory("seafood");
  items.meals.map((item) => {
    const card = new CustomCard(item.strMeal, item.strMealThumb, item.idMeal);
    beefCategory.childNodes[1].appendChild(card);
  });
  document.body.appendChild(beefCategory);
};

getbeefCategoryItems();
