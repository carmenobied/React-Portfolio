import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';
import Wrapper from "./components/Wrapper/wrapper";

import Navbar from "./components/Navbar/navbar";
// import { ProjectsList, ProjectsInsert, ProjectsUpdate } from './pages';
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
          <div>
          <Navbar />
          <Switch>
          <Wrapper>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route path="/projects/list" component={ProjectsList} />
          <Route path="/projects/create" component={ProjectsInsert} />
          <Route path="/projects/update/:id" component={ProjectsUpdate} /> */}
          {/* <Footer /> */}
          </Wrapper>
        </Switch>
        </div>
    </Router>
  )
}

export default App;