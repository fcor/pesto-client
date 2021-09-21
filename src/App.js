import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Help from "./views/help/";
import Home from "./views/home/";
import Navbar from "./components/navbar/";
import "./index.css";

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Route
          render={({ location }) => (
            <TransitionGroup exit={false}>
              <CSSTransition
                key={location.pathname.split("/")[1]}
                timeout={250}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/help" component={Help} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      <Footer />
    </div>
  </Router>
  );
}

const Footer = () => (
  <footer className="footer">
    <p>Copyright © 2021 🤘</p>
  </footer>
);

const NotFound = () => (
  <div className="soon">
    <h1>Page not found :(</h1>
  </div>
);

export default App;
