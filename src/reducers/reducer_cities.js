import {SEARCH_CITY_INFO, START, SUCCESS, FAIL} from '../constants';

const defaultCities = [];
const maxLimit = 5;

export default (cities = defaultCities, action) => {
  const {type, payload} = action;
  switch(type) {
    case SEARCH_CITY_INFO:
      return [payload.data, ...cities].slice(0, maxLimit);
      // return cities.concat(payload);
  }

  return cities;
}