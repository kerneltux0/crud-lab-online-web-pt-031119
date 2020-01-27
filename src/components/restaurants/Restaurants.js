import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map(restaurant => {
      return(<li><Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/></li>)
    })
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;