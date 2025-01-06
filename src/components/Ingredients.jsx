import { useState } from "react";
import Recipe from "./Recipe";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (formData) => {
    const data = formData.get("text");
    setIngredients((prev) => [...prev, data]);
  };

  const getRecipe = () => {
    if (ingredients.length <= 3) {
      alert(`you need to add more than 3 items to get a recipe`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <section>
        <form
          action={handleSubmit}
          className="mt-12 h-9 flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="text"
            name="text"
            placeholder="eg: strawberry"
            className="w-full sm:w-[400px] p-2 rounded-md outline-none border border-gray-400"
          />
          <button
            className="bg-[#141413] text-white w-full sm:w-44 p-2 rounded-md hover:text-rose-100"
            type="submit"
          >
            Add Ingredients
          </button>
        </form>
      </section>

      {ingredients.length > 0 && (
        <section className="mt-11 w-full sm:w-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#141413] text-center sm:text-left">
            Ingredients on hand:
          </h2>
          <ul className="list-disc pt-3 pl-5">
            {ingredients.map((item, index) => (
              <li key={index} className="text-lg sm:text-xl">
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-neutral-600 p-5 rounded-md flex items-center gap-5 mt-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-white  ">
                Ready for Recipe ?
              </h3>
              <p className="text-lg text-slate-300">
                Genrate a recipe from list of your ingredients.
              </p>
            </div>
            <button
              className="bg-black p-2 rounded-md text-slate-300"
              onClick={getRecipe}
            >
              Get a recipe
            </button>
          </div>
        </section>
      )}
      <Recipe />
    </div>
  );
};

export default Ingredients;
