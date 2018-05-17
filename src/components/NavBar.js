import React, { Component } from 'react';

class NavBar extends Component {
  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    console.log('getting restaurants');
  }

  render() {
    return (
      <div className="NavBar">
        NavBar Component
      </div>
    );
  }
}

export default NavBar;
