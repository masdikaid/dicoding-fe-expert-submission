import RestaurantCard from "../component/restaurant-card";
import RestaurantIdb from "../../data/restaurant-idb";

const Favorite = {
    render: async () => {
        return `
        <div class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">Favorite Restaurant</h2>
            </div>
            <div id="favorite" class="grid"></div>
        </div>
    `
    },
    afterRender: async () => {
        const restaurants = await RestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector('#favorite');
        restaurants.forEach((restaurant, index) => {
            restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
        });
    }
}

export default Favorite;