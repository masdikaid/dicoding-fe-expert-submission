const RestaurantCard = {
    render(restaurant) {
        return `
            <div tabindex="0" class="card">
                <img src="https://restaurant-api.dicoding.dev/images/medium/41" alt="Bring Your Phone Cafe">
                <div class="content-overlay flex-column content-space-beetwen">
                    <div class="flex card-badge content-space-beetwen">
                        <div class="flex content-space-around align-center ratting">
                            <img src="/assets/star.png" alt="ratting">
                            <h3>${restaurant.rating}</h3>
                        </div>
                        <div class="flex content-space-around align-center location">
                            <img src="/assets/ellipse.png" alt="ratting">
                            <h3>${restaurant.city}</h3>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3>${restaurant.name}</h3>
                        <p>${restaurant.description.substring(0, 200)}...</p>
                        <a class="button-cta" href="#/detail/${restaurant.id}">See Detail</a>
                    </div>
                </div>
            </div>
        `
    }
}

export default RestaurantCard;