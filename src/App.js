import { BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/authProvider';
import DerviceDetails from './components/DerviceDetails/DerviceDetails';
import Banner from './components/Header/Banner/Banner';
import HeaderMain from './components/Header/HeaderMain/HeaderMain';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './components/SignIn/SignIn/SignIn';

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Banner></Banner>
            <Home></Home>
          </Route>
          <Route path="/home">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Banner></Banner>
            <Home></Home>
          </Route>
          <Route path="/about">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/contact">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/service-details/:serviceId">
            <DerviceDetails></DerviceDetails>
          </PrivateRoute>
          <Route path="/signIn">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <SignIn></SignIn>
          </Route>







          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
