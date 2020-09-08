import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import TextEditor from "./components/TextEditor";
import Translator from "./components/Translator";
import Articles from "./components/Articles";
import EmployeesList from "./components/EmployeesList"
import CycleCounter from "./components/CycleCounter";

import {TRANSLATIONS, EMPLOYEES} from "./dummyData"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route
                        exact
                        path="/translator"
                        render={ () =>
                        <Fragment>
                            <Translator translations={TRANSLATIONS}/>                        
                        </Fragment>
                        }
                    />
                    <Route
                        exact
                        path="/employees"
                        render={ () =>
                        <Fragment>
                            <EmployeesList employees={EMPLOYEES}/>                        
                        </Fragment>
                        }
                    />
                    <Route exact path="/texteditor" component={TextEditor}/>
                    <Route exact path="/articles" component={Articles}/>
                    <Route exact path="/cycle" component={CycleCounter}/>
                </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;