import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Home} from "../view/home"
import {Login} from "../view/user/login"
import {Register} from "../view/user/register"

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
  )
}
