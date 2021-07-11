import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from '../../routes'
import routes from '../../routes'

// console.log(routes);

const loading = 'aaa';
const AppContent = () => {
  const getRoutes = (routes) => {
    return routes.map((route, idx) => {
      return (
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
      );
    });

  };

  return (
    <div>
      <Router>
        <React.Suspense fallback={loading}>
        <Switch>{getRoutes(routes)}</Switch>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default React.memo(AppContent)
