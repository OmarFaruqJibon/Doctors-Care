import { BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Banner from './components/Header/Banner/Banner';
import HeaderMain from './components/Header/HeaderMain/HeaderMain';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import SignIn from './components/SignIn/SignIn/SignIn';

function App() {
  return (
    <div>

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
          <Route path="/contact">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <Contact></Contact>
          </Route>
          <Route path="/signIn">
            <HeaderMain></HeaderMain>
            <Navbar></Navbar>
            <SignIn></SignIn>
          </Route>






        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
