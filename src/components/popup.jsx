import Button from "./buttons/button"

const Popup = ({selected , close}) => {
  return (
    <section className="fixed top-0 left-0 w-full h-full overflow-scroll bg-slate-600/60 flex justify-center items-center ">
      <div className="mx-60   bg-white rounded-xl flex  ">
        <div className="px-2 py-3 ">
          <img className="rounded-xl   " src={selected.Poster} />
        </div>
        <div className=" py-4 ">
          <h2 className="text-left text-2xl font-bold  ">
            {selected.Title}
            <span>{selected.Year}</span>
          </h2>
          <p>Rating:{selected.imdbRating}</p>

          <p className="text-left text-lg pb-5 ">{selected.Plot}</p>
          <Button onClick={close}>Close</Button>
        </div>
      </div>
    </section>
  );
}

export default Popup