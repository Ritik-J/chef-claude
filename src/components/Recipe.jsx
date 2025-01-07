/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

const Recipe = (props) => {
  return (
    <div className="mt-5 px-5 h-96 overflow-auto shadow-md shadow-black rounded-md bg-cover bg-center">
      <section className="leading-7 text-xl p-5">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
    </div>
  );
};

export default Recipe;
