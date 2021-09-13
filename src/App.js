import "./app.scss"
import Home from './pages/home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/Watch/Watch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = true;
  return (
      <Router>
          <Switch>
              <Route path="/" exact>
                  {user ? <Home /> : <Redirect to="/register" />}
              </Route>
              <Route path="/register" exact>
                  {!user ? <Register /> : <Redirect to="/" />}
              </Route>
              <Route path="/login" exact>
                  {!user ? <Login /> : <Redirect to="/login" />}
              </Route>
              {user && (
                  <>
                      <Route path="/movies">
                          <Home type="movies" />
                      </Route>
                      <Route path="/series">
                          <Home type="series" />
                      </Route>
                      <Route path="/watch">
                          <Watch />
                      </Route>
                  </>
              )}
          </Switch>
      </Router>
  )
}

export default App;
