import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import { Button, Radio, Icon } from 'antd';
import InputBlock from "./components/InputBlock.jsx";
import FormInput from "./components/FormInput.jsx"
import FormRegistration from "./components/FormRegistration.jsx"
import Slider from "./components/Slider.jsx"
import Cards from "./components/Card.jsx"
import Calendar from "./components/calendar/Calendar.jsx"
import ManipulatingSwiper from "./components/Swiper.jsx"
import Portfolio from "./components/Portfolio.jsx";
import Parallax from "./components/ParallaxSlider.jsx"

function Routes() {
    return (
      <Router>
        <div >
                    
          <Header/>
          <Route exact path="/homePage" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/card" component={Cards} /> 
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path={["/","/formInput"]} component={FormInput} />
          <Route path="/formRegistration" component={FormRegistration} />
          
          <Slider/>
          <Calendar/>
          

          
          <Footer/>
          
          
          
        </div>
      </Router>
    );
  } 
  
  function About() {
    return (
      <main>
        <div className="description">
        <div className="container">
            <div className="descriptionStaff">
            <div className="overview">
                    <div className="wrap-overview">
                        <div className="overview-content">
                                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        
                                <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                        </div>
            
                        <div className="overview-content">
                            <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        
                            <p> Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                        </div>
            
                        <div className="overview-content">
                            <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        
                            <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                        </div>
            
                    </div>
        
            </div>
           
            </div>
            </div>
            <Parallax/>
        </div>
            
    </main>
    );
  }
  
  function Topics({ match }) {
    return (
      <div className="description">
        <div className="container">
            <div className="descriptionStaff">
            <div className="topic">
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`} className="topicsLink">Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`} className="topicsLink">Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`} className="topicsLink">Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
           
            </div>
            </div>
        </div>
      
    );
  }
  
  function Topic({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
  
  export default Routes;