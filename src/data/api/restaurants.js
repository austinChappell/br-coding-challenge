import { getData } from './';
import { endpoints } from '../constants';

const { restaurantEndpoint } = endpoints;

const getRestaurants = (cb) => {
  getData(restaurantEndpoint, cb);
};

export default {
  getRestaurants,
};
