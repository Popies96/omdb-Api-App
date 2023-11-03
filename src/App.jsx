import Navbar from "./components/navbar";
import axios from "axios";
import { useState } from "react";
import Results from "./components/Results";
import Popup from "./components/popup";
function App() {
  const [state, setState] = useState({
    s: "",
    result: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=24261aaf";
  // const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=';

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
    console.log(state.s);
    console.log(state.selected);
  };
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let result = data.Search;
        setState((prevState) => {
          return { ...prevState, result: result };
        });
      });
    }
  };
  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  const close = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <>
      <Navbar handle={handleInput} search={search} />

      <main>
        <Results
          className="container"
          results={state.result}
          open={openPopup}
        />
        { typeof state.selected.Title != "undefined" ? <Popup selected={state.selected} close={close} /> :null 
          
        }
      </main>
    </>
  );
}

export default App;
