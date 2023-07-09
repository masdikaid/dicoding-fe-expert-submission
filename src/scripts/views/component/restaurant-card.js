import CONFIG from '../../global/config';

const RestaurantCard = {
  render(restaurant) {
    return `
            <div tabindex="0" aria-label="${restaurant.name}" class="card">
                <img src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="Bring Your Phone Cafe">
                <div class="content-overlay h-full flex-column content-space-beetwen">
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
                        <a class="button-cta" aria-label="see details ${restaurant.name}" href="#/detail/${restaurant.id}">See Detail</a>
                    </div>
                </div>
            </div>
        `;
  }
};

export default RestaurantCard;
