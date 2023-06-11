import RestaurantApi from "../../data/restaurant-api";
import RestaurantCard from "../component/restaurant-card";

const All = {
    render: async () => {
        return `
        <div class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">All Restaurant</h2>
            </div>
            <div id="all_explore" class="grid"></div>
            <p id="not_found_message" class="not-found-message">No Favorite Restaurant Found</p>
        </div>
    `
    },
    afterRender: async () => {
        const restaurants = await RestaurantApi.list();
        const restaurantContainer = document.querySelector('#all_explore');
        const notFoundMessage = document.querySelector('#not_found_message');
        if (restaurants.length !== 0) {
            notFoundMessage.innerHTML = "";
            restaurants.forEach((restaurant, index) => {
                restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
            });
        }
    }
}

export default All;