import React from 'react'
import {Link} from 'react-router-dom';

const BreadcrumbsItem = (props) => (
  <li className="breadcrumbs__list-item">
    <Link to={props.match.url || ''} className={props.match.isExact
      ? 'breadcrumbs__item active'
      : 'breadcrumbs__item'}>
      {props.name}
    </Link>
  </li>
)
export default BreadcrumbsItem;
