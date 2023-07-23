import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialRecipeState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipe, setRecipe] = useState(initialRecipeState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe(initialRecipeState);
  };

  return (
    <>
      <form name="create" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={recipe.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="Type of Cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Photo Url"
              value={recipe.photo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              id="preparation"
              name="preparation"
              placeholder="Preparation"
              value={recipe.preparation}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}

export default RecipeCreate;
