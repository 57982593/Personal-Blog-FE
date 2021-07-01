import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Home} from "../view/home"

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}
