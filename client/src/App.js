import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';

const App = () => {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }

export default App;