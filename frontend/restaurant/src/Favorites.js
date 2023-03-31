import React from "react";
import "./restuarants.css";
import { useState } from "react";
import { restaurants } from "./Restaurant";

function Favorites() {
  const [allRestaurants, setAllRestaurants] = useState(restaurants);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => {
    const restaurant = allRestaurants.find(
      (restaurant) => restaurant.name === name
    );

    setFavorites([...favorites, restaurant]);

    setAllRestaurants(
      allRestaurants.filter((restaurant) => restaurant.name !== name)
    );
  };

  /* the removal process */

  const removeFavorite = (name) => {
    const restaurant = favorites.find((restaurant) => restaurant.name === name);

    setAllRestaurants([...allRestaurants, restaurant]);

    setFavorites(favorites.filter((restaurant) => restaurant.name !== name));
  };

  /* const restaurant = tasks.find(task => task.name == name);
  <button onClick={() => addFavorite(restaurant.name)}>Add</button> */

  /* setRestaurants(restaurants.filter(restaurant =>
                  restaurant.name !== name
                )) */

  return (
    <div>
      <table className="default-table-style">
        <caption>Restaurant List</caption>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Phone</th>
          <th>Address</th>
          <th></th>
        </tr>
        {allRestaurants.map((restaurant, index) => (
          <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>{restaurant.phone}</td>
            <td>{restaurant.address}</td>
            <td>
              <button onClick={() => addFavorite(restaurant.name)}>Add</button>
            </td>
          </tr>
        ))}
      </table>
      {/* Favorites */}
      <table className="default-table-style">
        <caption>Favorites</caption>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Review Count</th>
          <th></th>
        </tr>
        {favorites.map((favorite, index) => (
          <tr>
            <td>{favorite.name}</td>
            <td>{favorite.category}</td>
            <td>{favorite.phone}</td>
            <td>{favorite.address}</td>
            <td>
              <button onClick={() => removeFavorite(favorite.name)}>
                Remove From Favorites
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Favorites;
