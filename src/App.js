import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

function App() {
    return (
        <Router>
           <Navbar />
            <Switch>
                <Route path='/portfolio/' exact component={Home} />
                <Route path='/portfolio/about-me' component={About}/>
                <Route path='/portfolio/projects' component={Projects} />
            </Switch>
        </Router>
    );
}

export default App;
