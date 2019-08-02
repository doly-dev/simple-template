import "core-js/stable"
import "~/app.less"

import React from "react"
import ReactDom from "react-dom"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom"

import routerConfig from "~/router.config"

function App() {
  return (
    <Router>
      <>
        <h1>Doly</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          {routerConfig.map(page => (
            <Route key={`page_${page.name}`} {...page} />
          ))}
          <Redirect to="/404" />
        </Switch>
      </>
    </Router>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
