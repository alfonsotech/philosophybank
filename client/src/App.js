import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Resources from './components/Resources'
import Footer from './components/Footer'
import Navigation from "./components/Navigation"
import NoMatch from "./pages/NoMatch"

const App = () =>
      <Router>
        <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Resources} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>

export default App;
