// third-party libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// action creators for reducers
import actions from '../../data/redux/actions/';

// components
import Grid from '../shared/Grid';
import GridItem from '../shared/GridItem';
import RestaurantDetails from './RestaurantDetails';

const propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  togglePanel: PropTypes.func.isRequired,
};

class Restaurants extends Component {
  // select restaurant and load into RestaurantDetails component
  handleClick = (index) => {
    const { restaurants } = this.props;
    const restaurant = restaurants[index];
    const panelView = (
      <RestaurantDetails
        restaurant={restaurant}
      />
    );

    // open panel
    this.props.togglePanel(panelView);
  }

  render() {
    const { restaurants } = this.props;

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
});

Restaurants.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
