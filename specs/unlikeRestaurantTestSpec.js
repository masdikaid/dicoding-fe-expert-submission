import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Unliking Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `
      <button aria-label="favourite button" 
              id="favourite" 
              type="button" 
              class="flex-row badge">
      </button>`;
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantIdb.updateRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(1);
  });

  it(
    'should display unlike widget when the restaurant has been liked',
    async () => {
      await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#favourite'),
        restaurant: {
          id: 1
        }
      });

      expect(document.querySelector('[id="fav-label"]').innerText)
        .toEqual('Favorit');
    }
  );

  it(
    'should not display like widget when the restaurant has been liked',
    async () => {
      await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#favourite'),
        restaurant: {
          id: 1
        }
      });

      expect(document.querySelector('[id="fav-label"]').innerText)
        .not
        .toEqual('Tambah Favorit');
    }
  );

  it(
    'should be able to remove liked restaurant from the list',
    async () => {
      expect((await RestaurantIdb.getAllRestaurants()).length)
        .toEqual(1);

      await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#favourite'),
        restaurant: {
          id: 1
        }
      });

      document.querySelector('#favourite')
        .dispatchEvent(new Event('click'));

      expect((await RestaurantIdb.getAllRestaurants()))
        .toEqual([]);
    }
  );

  it(
    'should not throw error if the unliked restaurant is not in the list',
    async () => {
      await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#favourite'),
        restaurant: {
          id: 1
        }
      });

      await RestaurantIdb.deleteRestaurant(1);

      document.querySelector('#favourite')
        .dispatchEvent(new Event('click'));

      expect((await RestaurantIdb.getAllRestaurants()))
        .toEqual([]);
    }
  );
});
