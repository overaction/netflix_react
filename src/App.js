import './app.scss'
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Watch from './pages/Watch/Watch'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from "./authContext/AuthContext";

function App() {
    const {user} = useContext(AuthContext)
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
                    {!user ? <Login /> : <Redirect to="/" />}
                </Route>
                {user && (
                    <>
                        <Route path="/movies">
                            <Home type="영화" />
                        </Route>
                        <Route path="/series">
                            <Home type="시리즈" />
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

export default App
