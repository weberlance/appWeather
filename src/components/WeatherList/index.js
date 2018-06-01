import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class WeatherList extends React.Component {
  renderCityWeather = (cityData) => {
    const {name} = cityData.city;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>Temperature</td>
        <td>Pressure</td>
        <td>Humidity</td>
      </tr>
    );
  }

  render() {
    const {cities} = this.props;
    // if (!cities.length) return null;
    const rows = cities.map(this.renderCityWeather);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>City name</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default connect( state => ({
  cities: state.cities
}))(WeatherList);