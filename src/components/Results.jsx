


const Results = ({results,open}) => {
  return (
    <section className="flex flex-wrap  mx-8   ">
      {results.map((result) => (
        <div
          className="bg-gradient-to-tr  from-blue-700/70   to-black/20  my-4 mx-10 rounded-xl overflow-hidden w-64   cursor-pointer  max-w-xs hover:shadow-md hover:scale-105"
          onClick={() => open(result.imdbID)}
          key={result.imdbID}
        >
          <img className="rounded-t-lg  max-h-96    " src={result.Poster} />
          <h3 className=" py-5 px-5 text-center text-white text-sm font-bold ">
            {result.Title}
          </h3>
        </div>
      ))}
    </section>
  );
  
}

export default Results