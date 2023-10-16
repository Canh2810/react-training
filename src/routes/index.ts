// Libs
import { lazy } from 'react'

// Constants
import { ROUTES } from '@constants'

// Types
import { RouteType } from '@types'

// Components
const Login = lazy(() => import('../pages/Login'))
const Home = lazy(() => import('../pages/Home'))
const SinglePost = lazy(() => import('../pages/SinglePost'))

export const PUBLIC_ROUTES: RouteType[] = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
  },
]

export const PROTECTED_ROUTES: RouteType[] = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.SINGLE_POST,
    Component: SinglePost,
  },
]
