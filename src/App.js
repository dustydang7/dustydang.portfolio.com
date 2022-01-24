import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";

function App() {
    return (
        <Router>
           <Navbar />
            <Switch>
                <Route path='/portfolio/' exact component={Home} />
                <Route path='/portfolio/about-me' component={About}/>
                <Route path='/portfolio/resume' component={Resume} />
            </Switch>
        </Router>
    );
}

export default App;
