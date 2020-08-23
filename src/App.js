import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardView from "./components/cadrViewPage";
import AddJournal from "./components/AddJournals";
import JournalViewPage from './components/JournalViewPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/journal-details/:id" component={JournalViewPage}></Route>

          <Route path="/add-journal" component={AddJournal}></Route>
          <Route path="/" component={CardView}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
