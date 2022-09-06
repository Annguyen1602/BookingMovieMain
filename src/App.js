import logo from "./logo.svg";
import "./App.css";
import {createBrowserHistory} from "history"
import { Router } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";


export const history = createBrowserHistory()

function App() {
  return (
    <Router history = {history}>
      
      <HomeTemplate path="/" exact Component = {Home}/>
      

    </Router>
  );
}

export default App;
