import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Topics from "./pages/Topics"
import Submit from "./pages/Submit"
import Footer from './components/Footer'
import Navigation from "./components/Navigation"
import NoMatch from "./pages/NoMatch"

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Topics} />
        <Route exact path="/submit" component={Submit} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App
