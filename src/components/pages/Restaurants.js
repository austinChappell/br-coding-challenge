import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../data/redux/actions/';

import Grid from '../shared/Grid';
import GridItem from '../shared/GridItem';
import RestaurantDetails from './RestaurantDetails';

const propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Restaurants extends Component {
  handleClick = (index) => {
    const { restaurants } = this.props;
    const restaurant = restaurants[index];
    const panelView = (
      <RestaurantDetails
        restaurant={restaurant}
      />
    );
    this.props.togglePanel(panelView);
    this.props.setRestaurant(restaurant);
  }

  render() {
    const {
      restaurants,
    } = this.props;

    return (
      <div className="Restaurants">
        <Grid>
          {restaurants.map((r, i) => (
            // must use index for key, as id on restaurant is not present
            <GridItem
              backgroundImage={r.backgroundImageURL}
              handleClick={this.handleClick}
              index={i}
              key={i} // eslint-disable-line
              title={r.name}
              subTitle={r.category}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants,
});

const mapDispatchToProps = dispatch => ({
  togglePanel: (panelView) => {
    dispatch(actions.togglePanel(panelView));
  },

  setRestaurant: (restaurant) => {
    dispatch(actions.setRestaurant(restaurant));
  },
});

Restaurants.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
