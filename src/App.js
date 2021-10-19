import { BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Appoinment from './components/Apoinment/Appoinment';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/authProvider';
import DerviceDetails from './components/DerviceDetails/DerviceDetails';
import Footer from './components/Footer/Footer';
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
            <Blogs></Blogs>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Banner></Banner>
            <Home></Home>
            <Blogs></Blogs>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route path="/blogs">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Blogs></Blogs>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/contact">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/appoinment">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Appoinment></Appoinment>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/service-details/:serviceId">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <DerviceDetails></DerviceDetails>
            <Footer></Footer>
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
