import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
// const Login = React.lazy(() => import('./views/auth/Login'))
// const Registration = React.lazy(() => import('./views/auth/Registration'))
// const PasswordReset = React.lazy(() => import('./views/auth/PasswordReset'))
// const NotFound = React.lazy(() => import('./views/notFound/NotFound'))
const loading = 'aaa';

const App = () => {
  return (
    <div>
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* <Route exact path="/login" name="Login" render={(props) => <Login {...props} />} />
            <Route exact path="/registration" name="Registration" render={(props) => <Registration {...props} />} />
            <Route exact path="/password-reset" name="Password Reset" render={(props) => <PasswordReset {...props} />} />
            <Route name="Not Found" render={(props) => <NotFound {...props} />} />
            <Route exact path="/" name="Home" render={(props) => <DefaultLayout {...props} />} /> */}
            <Route path="/" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>

    </div>
  );
}

export default App;
