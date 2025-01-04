const Ingredients = () => {
  return (
    <>
      <section className="mt-12 h-9 flex justify-center items-center gap-3 ">
        <input
          type="text"
          placeholder="eg: strawberry"
          className="w-[400px] p-2 rounded-md outline-none border border-gray-400"
        />
        <button className="bg-[#141413] text-white w-44 p-2 rounded-md hover:text-rose-100">
          Add Ingredients
        </button>
      </section>

      <div className="mt-11 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#141413]">
          Ingredients on hand:
        </h2>
        <ul>
          <li>one</li>
        </ul>
      </div>
    </>
  );
};

export default Ingredients;
