import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface ProtectRouteProps extends RouteProps {
  component: React.FC
  auth: boolean
}

export const ProtectRoute: React.FC<ProtectRouteProps> = props => {
  let { auth: isAuth, component: Component } = props

  // const {auth} = useAuthValues()
  const currentUser = { auth: false }

  const renderRoutes = (routeprops: any) => {
    if ((isAuth && currentUser.auth) || !isAuth) {
      return <Component {...props} />
    }
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: routeprops.location } }}
      />
    )
  }

  return (
    <Route
      exact
      {...props}
      render={(routeprops: any) => renderRoutes(routeprops)}
    />
  )
}
