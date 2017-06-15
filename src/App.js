import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import {routes} from './routesConfig'
import {Breadcrumbs} from './components/Breadcrumbs'
import {Quisque, Odio, Eleifend, Scelerisque, NoMatch} from './components/Pages'

class App extends Component {

  render() {
    const displayRoutes = matchRoutes(routes, document.location.pathname)
    return (
      <div className="App">
        <Breadcrumbs routes={displayRoutes}/>

        <ul className='links__list'>
          <li><Link to="/breadcrumbs">Quisque</Link></li>
          <li><Link to="/breadcrumbs/odio">Odio</Link></li>
          <li><Link to="/breadcrumbs/odio/eleifend">Eleifend</Link></li>
          <li><Link to="/breadcrumbs/odio/eleifend/scelerisque">Scelerisque</Link></li>
        </ul>

        <Switch>
          <Route exact path="/breadcrumbs" component={Quisque}/>
          <Route exact path="/breadcrumbs/odio/" component={Odio}/>
          <Route exact path="/breadcrumbs/odio/eleifend" component={Eleifend}/>
          <Route exact path="/breadcrumbs/odio/eleifend/scelerisque" component={Scelerisque}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
