import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Page } from './components';
import { shoeQuestions, weaponQuestions, currencyQuestions, enemyQuestions, musicQuestions, companionQuestions } from './data';

import './App.css';

class App extends Component {
  state = {
    selected: {
      shoes: 0,
      weapons: 0,
      enemies: 0,
      currency: 0,
      music: 0,         
      companion: 0,
    }
  };

  componentDidMount() {
    window.fetch('http://localhost:3001/').then(res => console.log(res))
  }

  select = (category, index) => {
    let selected = this.state.selected;
    selected[category] = index;
    this.setState({ selected });
    console.log(this.state)
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route
            path="/1"
            render={({ location }) => <Page data={shoeQuestions} category="shoes" location={location} selected={this.state.selected.shoes} select={this.select} />}
          />
          <Route
            path="/2"
            render={({ location }) => <Page data={weaponQuestions} category="weapons" location={location} selected={this.state.selected.weapons} select={this.select} />}
          />
          <Route
            path="/3"
            render={({ location }) => <Page data={enemyQuestions} category="enemies" location={location} selected={this.state.selected.enemies} select={this.select} />}
          />
          <Route
            path="/4"
            render={({ location }) => <Page data={currencyQuestions} category="currency" location={location} selected={this.state.selected.currency} select={this.select} />}
          />
          <Route
            path="/5"
            render={({ location }) => <Page data={musicQuestions} category="music" location={location} selected={this.state.selected.music} select={this.select} />}
          />
          <Route
            path="/6"
            render={({ location }) => <Page data={companionQuestions} category="companion" location={location} selected={this.state.selected.companion} select={this.select} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
