import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Search from './Views/Search';
import Info from './Views/About';
import Details from './Views/Details';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Search" exact>
            <Search />
          </Route>
          <Route path="/About" exact>
            <Info />
          </Route>
          <Route path="/Details/:name" exact>
            <Details />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
