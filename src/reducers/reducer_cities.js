import {SEARCH_CITY_INFO, START, SUCCESS, FAIL} from '../constants';

const defaultCities = [];

export default (cities = defaultCities, action) => {
  const {type, payload} = action;
  switch(type) {
    case SEARCH_CITY_INFO:
      return cities.concat(payload.city);
  }

  return cities;
}