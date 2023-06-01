import Restaurant from "../../data/restaurant";
import RestaurantCard from "../component/restaurant-card";

const All = {
    render: async () => {
        return `
        <div class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">All Restaurant</h2>
            </div>
            <div id="all_explore" class="grid"></div>
        </div>
    `
    },
    afterRender: async () => {
        const restaurants = await Restaurant.list();
        const restaurantContainer = document.querySelector('#all_explore');
        restaurants.forEach((restaurant, index) => {
            restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
        });
    }
}

export default All;