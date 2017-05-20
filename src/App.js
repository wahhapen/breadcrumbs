import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__list-item">
              <a href="#a" className="breadcrumbs__item">Quisque</a>
            </li>
            <li className="breadcrumbs__list-item">
              <a href="#b" className="breadcrumbs__item">Odio</a>
            </li>
            <li className="breadcrumbs__list-item">
              <a href="#c" className="breadcrumbs__item">Eleifend</a>
            </li>
            <li className="breadcrumbs__list-item">
              <a href="#d" className="breadcrumbs__item breadcrumbs__item--active">Scelerisque</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
