import Parser from '../../routes/parser';
import RestaurantApi from '../../data/restaurant-api';
import CONFIG from '../../global/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const FavouriteButton = (status) => {
  if (status) {
    return `
            <i class="fa fa-heart text-red" aria-hidden="true"></i>
            <h4 id="detail_city" class="text-middle">Favorit</h4>
        `;
  }
  return `
            <i class="fa fa-heart-o text-red" aria-hidden="true"></i>
            <h4 id="detail_city" class="text-middle">Tambah Favorit</h4>
        `;
};

const Detail = {
  render: async () => `
        <div tabindex="0" class="full-container">
            <img class="jumbotron" id="detail_picture" src="/images/heros/merchant.png" alt="jumbotron banner"/>
            <h3 id="detail_title" class="content-overlay cus-title">Food For Everyone</h3>
        </div>
        <div class="container bg-theme">
            <div class="ratting-card">
                <div class="flex-row badge">
                    <h4>⭐</h4>
                    <h4 id="detail_rating" class="text-middle">3.2</h4>
                </div>
                <div class="flex-row badge">
                    <h4 id="detail_city" class="text-middle">Magelang</h4>
                </div>
                <button aria-label="favourite button" id="favourite" class="flex-row badge">
                </button>
            </div>
            <div class="detail-body">
                <p id="detail_address" class="detail-address">Jl. Asem jaya Gg. Belimbing No.003 Mustika Jaya</p>
                <p id="detail_description" class="detail-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate ducimus inventore ipsam laudantium natus quas repellendus? Corporis cum, distinctio hic libero, magni, minima nihil praesentium quia sit unde voluptatibus.</span><span>Aliquam earum excepturi inventore temporibus voluptatum? Cum quibusdam, unde. Cumque dolorum earum facere fuga impedit quae reprehenderit rerum ullam ut voluptas? Aliquid atque autem commodi laborum nostrum possimus quod ullam?</span><span>Accusantium ad amet consequuntur dolorum exercitationem expedita explicabo facilis fugiat incidunt ipsam iusto labore, libero maiores maxime modi, officiis, possimus quia quis quisquam recusandae temporibus tenetur velit vero vitae voluptates!</span><span>A ab animi aut culpa deleniti distinctio dolorum ducimus ea enim esse eveniet ex facere fuga harum, impedit ipsam iure natus nulla officia officiis possimus quae rem repellat veniam vero!</p>
            </div>
        </div>
        <div class="container bg-theme menus-section">
            <h4>Makanan</h4>
            <div id="detail_foods" class="flex-row flex-wrap"></div>
            <h4>Minuman</h4>   
            <div id="detail_drinks" class="flex-row flex-wrap"></div>
            <h4>Review</h4>
            <form id="review_form">
                <input class="review-input" type="text" placeholder="Nama anda...">
                <textarea class="review-input" rows="5" placeholder="Tulis review anda disini..."></textarea>
                <p id="err_review_form" class="text-error text-red"></p>
                <button class="button-cta">Kirim</button>
            </form>   
            <div id="detail_review" class="detail-review flex-col"></div>
        </div>
    `,
  afterRender: async () => {
    const restaurantImage = document.querySelector('#detail_picture');
    const restaurantTitle = document.querySelector('#detail_title');
    const restaurantRating = document.querySelector('#detail_rating');
    const restaurantCity = document.querySelector('#detail_city');
    const restaurantAddress = document.querySelector('#detail_address');
    const restaurantDescription = document.querySelector('#detail_description');
    const restaurantFoods = document.querySelector('#detail_foods');
    const restaurantDrinks = document.querySelector('#detail_drinks');
    const restaurantReview = document.querySelector('#detail_review');
    const favouriteButton = document.querySelector('#favourite');
    const reviewForm = document.querySelector('#review_form');

    const restaurantId = Parser.parseActiveUrlWithoutCombiner().id;
    const restaurant = await RestaurantApi.detail(restaurantId);

    restaurantImage.src = CONFIG.LARGE_IMAGE_URL + restaurant.pictureId;
    restaurantTitle.innerHTML = restaurant.name;
    restaurantRating.innerHTML = restaurant.rating;
    restaurantCity.innerHTML = restaurant.city;
    restaurantAddress.innerHTML = restaurant.address;
    restaurantDescription.innerHTML = restaurant.description;
    restaurant?.menus?.foods.forEach((food) => {
      restaurantFoods.innerHTML += `
                <div class="badge">
                    <h5>${food.name}</h5>
                </div>
            `;
    });
    restaurant?.menus?.drinks.forEach((drink) => {
      restaurantDrinks.innerHTML += `
                <div class="badge">
                    <h5>${drink.name}</h5>
                </div>
            `;
    });
    restaurant?.customerReviews.reverse()
      .forEach((review) => {
        restaurantReview.innerHTML += `
                <p class="review-date">${review.date}</p>
                <div class="review-card">
                    <h5>${review.name}</h5>
                    <p>${review.review}</p>
                </div>
            `;
      });

    LikeButtonInitiator.init({
      likeButtonContainer: favouriteButton,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId
      }
    });

    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errReviewForm = document.querySelector('#err_review_form');
      const name = e.target[0].value;
      const review = e.target[1].value;
      const submitButton = e.target[2];

      submitButton.disabled = true;
      if (name === '' || review === '') {
        errReviewForm.innerHTML = 'Nama dan review tidak boleh kosong';
        submitButton.disabled = false;
        return;
      }
      errReviewForm.innerHTML = '';

      try {
        const reviewRes = await RestaurantApi.review({
          id: restaurantId,
          name,
          review
        });
        restaurantReview.innerHTML = '';
        reviewRes.forEach((rev) => {
          restaurantReview.innerHTML += `
                        <p class="review-date">${rev.date}</p>
                        <div class="review-card">
                            <h5>${rev.name}</h5>
                            <p>${rev.rev}</p>
                        </div>
                `;
        });
      } catch (err) {
        errReviewForm.innerHTML = err.message;
        submitButton.disabled = false;
      } finally {
        reviewForm.reset();
        submitButton.innerHTML = 'Terima kasih';
      }
    });
  }
};

export default Detail;
export { FavouriteButton };
