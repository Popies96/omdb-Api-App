import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Button from "./buttons/button"

const index = ({handle , search}) => {
  return (
    <div className="flex justify-between p-5 w-full items-center ">
      <div>logo</div>
      <div className="bg-gray-400 flex items-center px-9 rounded-xl hover:border-zinc-400 ">
        <SearchIcon className="mr-2  " />
        <input
          className="bg-gray-400 flex outline-none out appearance-none text-left    py-1 px-10 "
          type="text"
          placeholder="search your movie"
          onChange={handle}
          onKeyPress={search}
          
        />
      </div>
      <div className="flex justify-between items-start">
        <ul className="flex  items-center pr-5">
          <li className="mr-4">{<Button>favorite</Button>}</li>
          <li>{<Button>recommended</Button>}</li>
        </ul>

        <PersonIcon />
      </div>
    </div>
  );
}

export default index
