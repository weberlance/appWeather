import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cityInfoSearch} from '../../AC';

class SearchBar extends React.Component {

  state = {
    searchCity: 'new york'
  }

  onChangeHandle = (e) => {
    this.setState({searchCity: e.target.value});
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.searchCity === '') return;
    this.props.cityInfoSearch(this.state.searchCity);
    this.setState({ searchCity: '' })
  }

  render() {
    return (
      <form
        className="input-group my-3"
        onSubmit={this.onSubmitHandler}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter the city"
          value={this.state.searchCity}
          onChange={this.onChangeHandle}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { cityInfoSearch })(SearchBar);