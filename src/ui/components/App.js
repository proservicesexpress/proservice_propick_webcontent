import React, { Component } from 'react'
import './../css/App.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home/Home'
import Proservice from './Proservice/ProService'
import Propick from './Propick/Propick'
import AboutUs from './Proservice/AboutUs'
import Career from './Proservice/Career'
import TermProservice from './Proservice/Term'
import PrivacyProservice from './Proservice/Privacy'
import TermPropick from './Propick/Term'
import PrivacyPropick from './Propick/Privacy'
import ScrollToTop from '../utils/ScrollToTop'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ScrollToTop>
              <Route path="/" exact component={Home} />
              <Route path="/proservice" exact component={Proservice} />
              <Route path="/propick" exact component={Propick} />
              <Route path="/proservice/aboutus" exact component={AboutUs} />
              <Route path="/proservice/career" exact component={Career} />
              <Route path="/proservice/term" exact component={TermProservice} />
              <Route path="/proservice/privacy" exact component={PrivacyProservice} />
              <Route path="/propick/term" exact component={TermPropick} />
              <Route path="/propick/privacy" exact component={PrivacyPropick} />
              <Route path="/downloadapp" component={() => window.location = 'https://play.google.com/store/apps/details?id=com.propick.customer'} />
            </ScrollToTop>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
