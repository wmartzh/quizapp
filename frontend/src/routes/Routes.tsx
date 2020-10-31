import React from 'react'
import { ROUTES } from '.'
import { ProtectRoute } from './ProtectRoute'

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <>
      {ROUTES.map(({ path, auth, component: Component }) => {
        if (path === '/post') {
          path = `${path}/:slug/:uuid`
        }
        return (
          <ProtectRoute
            key={path}
            exact
            path={path}
            auth={auth}
            component={Component}
          />
        )
      })}
    </>
  )
}
