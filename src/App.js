import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import addTeacher from './components/addTeacher';
import viewTeacher from './components/viewTeacher';
import editTeacher from './components/editTeacher';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={addTeacher}/>
                        <Route  path='/viewTeacher' component={viewTeacher}/>
                        <Route  path='/editTeacher/:id' component={editTeacher}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;