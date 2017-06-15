import {Quisque, Odio, Eleifend, Scelerisque} from './components/Pages'

export const routes = [
  {
    component: Quisque,
    name: 'Quisque',
    path: '/',
    routes: [
      {
        path: '/odio',
        name: 'Odio',
        component: Odio,
        routes: [
          {
            path: '/odio/eleifend',
            name: 'Eleifend',
            component: Eleifend,
            routes: [
              {
                path: '/odio/eleifend/scelerisque',
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
