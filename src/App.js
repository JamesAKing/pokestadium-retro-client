import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/private-routes/PrivateRoutes';
import Header from './components/header/Header';
import LoginPage from './pages/login/Login';
import HomePage from './pages/home/Home';
import RegisterPage from './pages/register/Register';
import { useAuth } from './contexts/AuthContext';
import {
  homeURL,
  loginURL,
  registerURL,
  dashboardURL
} from './utilities/routerURLs';
import DashboardPage from './pages/dashboard/Dashboard';

function App() {

  const auth = useAuth();

  console.log(auth);

  return (
    <div className="App">
        <BrowserRouter>

          <Header />

          <Switch>
            <Route exact path={homeURL} component={HomePage} />
            <Route path={loginURL} component={LoginPage} />
            <Route path={registerURL} component={RegisterPage} />
            {/* <PrivateRoute exact path={dashboardURL} component={DashboardPage} /> */}
            <Route exact path={dashboardURL} component={DashboardPage} />
          </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;