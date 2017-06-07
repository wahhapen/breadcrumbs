import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';


const BreadcrumbsItem = ({ match }) => { console.log(match); return(

    <li>
      <Link to={match.url || ''} className={match.isExact ? 'breadcrumbs__item breadcrumbs__item--active' : 'breadcrumbs__item'}>
        {match.params.path}
      </Link>
      <ul><Route path={`${match.url}/:path`} component={BreadcrumbsItem} /></ul>
    </li>
)}


const Breadcrumbs = (props) => (
    <nav className="breadcrumbs">
        <ul className='breadcrumbs__list'>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    </nav>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breadcrumbs/>
        <ul className='breadcrumbs__list'>
          <li>
          <Link to="/quisque">Quisque</Link> <span> >> </span></li>
          <li>
          <Link to="/quisque/odio">Odio</Link> <span> >> </span></li>
          <li>
          <Link to="/quisque/odio/eleifend">Eleifend</Link> <span> >> </span></li>
          <li>
          <Link to="/quisque/odio/eleifend/scelerisque">Scelerisque</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
