import { Dashboard, SignIn, SignUp } from '../components/pages'

export { Router } from './Routes'
export { API_ROUTES } from './apiRoutes'

export const ROUTES = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    auth: true
  },
  {
    name: 'SignIn',
    path: '/login',
    component: SignIn,
    auth: false
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: SignIn,
    auth: false
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp,
    auth: false
  }
]
