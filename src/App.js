import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from './pages/login/Login';
import HomePage from './pages/home/Home';
import RegisterPage from './pages/register/Register';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import {
  homeURL,
  loginURL,
  registerURL
} from './utilities/routerURLs';

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
          </Switch>
          
        </BrowserRouter>
    </div>
  );
}

export default App;