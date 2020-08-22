import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardView from "./components/cadrViewPage";
import AddJournal from "./components/AddJournals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/add-journal" component={AddJournal}></Route>
          <Route path="/" component={CardView}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
