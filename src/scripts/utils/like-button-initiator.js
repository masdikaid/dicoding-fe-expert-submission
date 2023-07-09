import RestaurantIdb from '../data/restaurant-idb';
import { FavouriteButton } from '../views/pages/detail';

const likeButtonInitiator = {
  async init({
    likeButtonContainer,
    restaurant
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = FavouriteButton(true);
    this._likeButtonContainer.removeEventListener('click', this._likeRestaurant);
    this._likeButtonContainer.addEventListener('click', this._unlikeRestaurant.bind(this));
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = FavouriteButton(false);
    this._likeButtonContainer.removeEventListener('click', this._unlikeRestaurant);
    this._likeButtonContainer.addEventListener('click', this._likeRestaurant.bind(this));
  },
  async _likeRestaurant() {
    await RestaurantIdb.updateRestaurant(this._restaurant);
    await this._renderButton();
  },
  async _unlikeRestaurant() {
    await RestaurantIdb.deleteRestaurant(this._restaurant.id);
    await this._renderButton();
  }
};

export default likeButtonInitiator;
