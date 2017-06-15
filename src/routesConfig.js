import {Quisque, Odio, Eleifend, Scelerisque} from './components/Pages'

export const routes = [
  {
    component: Quisque,
    name: 'Quisque',
    path: '/breadcrumbs',
    routes: [
      {
        path: '/breadcrumbs/odio',
        name: 'Odio',
        component: Odio,
        routes: [
          {
            path: '/breadcrumbs/odio/eleifend',
            name: 'Eleifend',
            component: Eleifend,
            routes: [
              {
                path: '/breadcrumbs/odio/eleifend/scelerisque',
                name: 'Scelerisque',
                component: Scelerisque
              }
            ]
          }
        ]
      }
    ]
  }
]
