import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminPanel from './components/AdminPanel/AdminPanel';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path ='/home'>
            <div>
            <Header navbar={true}></Header>
              <Home></Home>
            </div>
        </Route>
        <Route path="/adminPanel">
           <div>
           <Header navbar={false}></Header>
           <AdminPanel/>
           </div>
        </Route>
        <Route exact path="/">
           <Header navbar={true}></Header>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
