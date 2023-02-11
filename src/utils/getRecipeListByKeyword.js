const getRecipeListByKeyword = (keyword) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
  const data = fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data.meals;
    });

  return data;
};

export default getRecipeListByKeyword;
