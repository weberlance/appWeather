import {SEARCH_CITY_INFO} from '../constants';

export function cityInfoSearch(city) {
  return {
    type: SEARCH_CITY_INFO,
    payload: { city }
  };
}