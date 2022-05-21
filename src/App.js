// import { Router } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import AfterLogin from "./components/AfterLogin";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <section className="App">
        <header className="App-header">I am the large header</header>

        <Route exact path="/" component={AfterLogin} />
        <Route path="/login" component={Login} />
      </section>
    </Router>
  );
}

export default App;
