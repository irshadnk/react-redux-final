import React, { Component } from 'react';
import Redux from 'redux'
import './App.css';
import ListComponent from './containers/list';
import SearchComponent from './containers/search';
import store from './redux/store'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchComponent store ={store} />
        <ListComponent store ={store} />
      </React.Fragment>
    );
  }
}

export default App;
