import { getData } from './';
import { endpoints } from '../constants';

const { restaurantsEndpoint } = endpoints;

const getRestaurants = (cb) => {
  console.log('url', restaurantsEndpoint);
  getData(restaurantsEndpoint, cb);
};

export default {
  getRestaurants,
};
