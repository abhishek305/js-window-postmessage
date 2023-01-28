import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { Window } from "./components/Window";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/popup" component={Window}/>
        <Redirect from="*" to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
