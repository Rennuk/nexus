import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Greet from "./Components/Greet/Greet";

import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Experience from "./Components/Pages/Experience/Experience";
import Education from "./Components/Pages/Education/Education";

const App = () => {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/experience" exact>
          <Experience />
        </Route>

        <Route path="/education" exact>
          <Education />
        </Route>

        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
