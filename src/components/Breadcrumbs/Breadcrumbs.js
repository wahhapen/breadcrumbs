import React from 'react'
import { Link } from 'react-router-dom';

export const Breadcrumbs = (props) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__list-item">
        <Link to="/quisque" className="breadcrumbs__item">Quisque</Link>
      </li>
      <li className="breadcrumbs__list-item">
        <Link to="/odio" className="breadcrumbs__item">Odio</Link>
      </li>
      <li className="breadcrumbs__list-item">
        <Link to="/eleifend" className="breadcrumbs__item">Eleifend</Link>
      </li>
      <li className="breadcrumbs__list-item">
        <Link to="/scelerisque" className="breadcrumbs__item breadcrumbs__item--active">Scelerisque</Link>
      </li>
    </ul>
  </nav>
)
