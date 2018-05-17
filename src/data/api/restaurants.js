import { getData } from './';
import { endpoints } from '../constants';

const { restaurantsEndpoint } = endpoints;

const getRestaurants = (cb) => {
  getData(restaurantsEndpoint, cb);
};

export default {
  getRestaurants,
};
