import  React  from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,comedy,horror,originals} from './urls'
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='comedy' isSmall />
    </div>
  );
}

export default App;


