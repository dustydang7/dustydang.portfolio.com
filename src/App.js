import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
    return (
        <Router>
           <Navbar />
            <Switch>
                <Route path='/portfolio' exact component={Home} />
                <Route path='/about-me' component={About}/>
            </Switch>
        </Router>
    );
}

export default App;
