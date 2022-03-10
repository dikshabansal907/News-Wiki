import './App.css';
import React, { Component } from 'react';
import News from './components/News'
import NavBar from './components/NavBar';
import PropTypes from 'prop-types';
import Carousel from './components/Carousel';
import LoadingBar from 'react-top-loading-bar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  static defaultProps={
    country:'in',
    pageSize:30,
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  render() {
    return (
    <>
      <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Carousel/>
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={30} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={30} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={30} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={30} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={30} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={30} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={30} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={30} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
        
    </>
    )
  }
}
