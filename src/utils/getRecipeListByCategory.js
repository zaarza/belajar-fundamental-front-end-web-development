const getRecipeListByCategory = (category) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const data = fetch(URL)
    .then((result) => result.json())
    .then((data) => {
      return data;
    });

  return data;
};

export default getRecipeListByCategory;
