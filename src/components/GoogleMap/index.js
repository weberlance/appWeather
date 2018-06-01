import React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidMount() {
    new google.maps.Map(this.map.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref={this.map} style={{height:"200px", width: "250px"}}/>;
  }
}

export default GoogleMap;