import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AreaList from './components/AreaList';
import AreaDetails from './components/AreaDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/areas" exact component={AreaList} />
          <Route path="/areas/:id" component={AreaDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
