import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-3 mb-5">5 days weather forecast</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}