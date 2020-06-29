import './App.scss';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WelcomeBlock from './pages/WelcomeBlock/WelcomeBlock';


export default class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


function WelcomePage() {
  return (
    <>
      <WelcomeBlock />
      <div style={{width: "100%", height: "600px"}} className="test te"></div>
    </>
  )
}

