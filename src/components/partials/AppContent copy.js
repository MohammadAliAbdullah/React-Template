import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes'

const loading = 'aaa';
const AppContent = () => {
  return (
    <div>
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default React.memo(AppContent)
