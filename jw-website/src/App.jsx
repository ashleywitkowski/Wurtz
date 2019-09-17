import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import test from "./components/About/About";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <NavBar />
          </div>
        </div>
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-12">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={test} />
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
