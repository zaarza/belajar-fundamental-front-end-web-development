const getRecipeDetailsById = (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      return result.meals[0];
    });

  return data;
};

export default getRecipeDetailsById;
