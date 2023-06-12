import RestaurantCard from '../component/restaurant-card';
import RestaurantIdb from '../../data/restaurant-idb';

const Favorite = {
  render: async () => `
        <div class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">Favorite Restaurant</h2>
            </div>
            <div id="favorite" class="grid"></div>
            <p id="not_found_message" class="not-found-message">No Favorite Restaurant Found</p>
        </div>
    `,
  afterRender: async () => {
    const restaurants = await RestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#favorite');
    const notFoundMessage = document.querySelector('#not_found_message');
    if (restaurants.length !== 0) {
      notFoundMessage.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
      });
    }
  }
};

export default Favorite;
