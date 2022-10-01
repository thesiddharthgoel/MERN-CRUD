import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home";
//import About from "./Components/pages/About";
//import Contact from "./Components/pages/Contact";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/pages/NotFound";
import AddUser from "./Components/users/AddUsers";
import EditUser from "./Components/users/EditUser";
import User from "./Components/users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
