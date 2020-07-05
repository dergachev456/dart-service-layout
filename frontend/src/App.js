import './App.scss';
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import WelcomeSection from './sections/WelcomeSection/WelcomeSection';
import ToolSection from './sections/ToolSection/ToolSection';


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
      <div style={{height: "300px", background: "tomato"}} />
    </>
  )
}

