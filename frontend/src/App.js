import './App.scss';
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import WelcomeSection from './sections/WelcomeSection/WelcomeSection';
import ToolSection from './sections/ToolSection/ToolSection';
import CountsSection from './sections/CountsSection/CountsSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import AboutUsSection from './sections/AboutUsSection/AboutUsSection';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={WelcomePage} />
        </Switch>
      </HashRouter>
    )
  }
}


function WelcomePage() {
  return (
    <>
      <WelcomeSection />
      <ToolSection />
      <CountsSection />
      <ServicesSection />
      <AboutUsSection />
      <div style={{height: "300px", background: "tomato"}} />
    </>
  )
}

