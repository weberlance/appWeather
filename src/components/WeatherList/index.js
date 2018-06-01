import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Chart from '../Chart';
import GoogleMap from '../GoogleMap';

class WeatherList extends React.Component {
  renderCityWeather = (cityData) => {
    const {name, coord} = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={name} className="text-center">
        <td><GoogleMap lat={coord.lat} lon={coord.lon}/></td>
        <td><Chart data={temps} units="K" color="orange"/></td>
        <td><Chart data={pressures} units="hPa" color="blue"/></td>
        <td><Chart data={humidities}/></td>
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