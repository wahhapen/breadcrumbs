import React, { Component } from 'react';
import {Breadcrumbs} from './components/Breadcrumbs';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Quisque extends Component {
  render() {
    return (
      <Breadcrumbs />
    )
  }
}
class Odio extends Component {
  render() {
    return (
      <Breadcrumbs />
    )
  }
}
class Eleifend extends Component {
  render() {
    return (
      <Breadcrumbs />
    )
  }
}
class Scelerisque extends Component {
  render() {
    return (
      <Breadcrumbs />
    )
  }
}

const Routes = () => (
  <Router>
    <nav>
          <Route path="/quisque" component={Quisque} />
          <Route path="/odio" component={Odio} />
          <Route path="/eleifend" component={Eleifend} />
          <Route path="/scelerisque" component={Scelerisque} />
        <ul>
          <li><Link to="/quisque">Quisque</Link></li>
          <li><Link to="/odio">Odio</Link></li>
          <li><Link to="/eleifend">Eleifend</Link></li>
          <li><Link to="/scelerisque">Scelerisque</Link></li>
        </ul>
    </nav>
  </Router>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
