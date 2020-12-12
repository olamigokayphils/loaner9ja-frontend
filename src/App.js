import { Fragment } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './sass/app.scss';
import HomePage from "./components/HomePage"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/auth/login" component={Login}/>
          <Route exact path="/auth/register" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
