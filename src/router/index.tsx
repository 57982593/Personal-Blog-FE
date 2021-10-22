import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {Home} from "../view/home";
import {Login} from "../view/user/login";
import {Register} from "../view/user/register";
import {NotFound} from "../view/NotFound";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          {/*TODO 如果是 以 / 为路由的默认路由需要添加 exact 进行精确匹配，否则会匹配到其他以 / 开头路由上*/}
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          {/*TODO 如果存在嵌套路由（二级路由）则不能加 exact 进行精确匹配，因为路由需要先匹配父级路由再去匹配子级路由*/}
          <Route path="/home" component={Home}/>
          <Redirect from={"/login"} to={"/"}/>
          <Route path={"*"} component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}
