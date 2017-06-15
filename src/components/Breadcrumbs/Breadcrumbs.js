import React from 'react'
import BreadcrumbsItem from './BreadcrumbsItem'

export const Breadcrumbs = (props) => (
  <nav className="breadcrumbs">
    <ul className='breadcrumbs__list'>
      {props.routes.map(({route, match}) => <BreadcrumbsItem name={route.name} match={match} key={Math.random()}/>)}
    </ul>
  </nav>
)
