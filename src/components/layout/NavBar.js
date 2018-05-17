import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// apis and actions
import actions from '../../data/redux/actions/';
import restaurantAPI from '../../data/api/restaurants';

const { getRestaurants } = restaurantAPI;

const propTypes = {
  setRestaurants: PropTypes.func.isRequired,
};

class NavBar extends Component {
  componentDidMount() {
    this.getRestaurants();
  }

  // make call to api
  getRestaurants = () => {
    getRestaurants(this.setRestaurants);
  }

  // handle response from api
  setRestaurants = (results) => {
    const { setRestaurants } = this.props;
    const { restaurants } = results;

    // dispatch results to store
    setRestaurants(restaurants);
  }

  render() {
    return (
      <div className="NavBar">
        NavBar Component
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setRestaurants: restaurants => dispatch(actions.setRestaurants(restaurants)),
});

NavBar.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(NavBar);
