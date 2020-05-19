import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './Auth'

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuth()) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login'
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
