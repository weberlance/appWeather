import {SEARCH_CITY_INFO} from '../constants';
import axios from 'axios';


export function cityInfoSearch(city) {
  const APIUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = '60c7496f70c0fd25c146a30b2ddb3702';

  const request = axios.get(APIUrl, {
    params: {
      APPID: appId,
      q: `${city},us`
    }
  });

  return {
    type: SEARCH_CITY_INFO,
    payload: request
  };
}