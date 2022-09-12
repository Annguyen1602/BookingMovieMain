import logo from "./logo.svg";
import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({ window });

function App() {
  return (
   <HistoryRouter history={history}>
    <Routes>
      <Route path="/*" element={<HomeTemplate path="/home" element = {Home}/>}>

      </Route>
    </Routes>

   </HistoryRouter>
  );
}

export default App;
