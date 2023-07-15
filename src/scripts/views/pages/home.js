import RestaurantApi from '../../data/restaurant-api';
import RestaurantCard from '../component/restaurant-card';

const Home = {
  render: async () => `
        <div class="full-container">
            <picture>
                <source media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg">
                <img class="jumbotron" src="/images/heros/hero-image_4-large.jpg" alt="jumbotron banner"/>
            </picture>
            <h3 class="content-overlay cus-title">Food For Everyone</h3>
        </div>
        <div class="container bg-theme">
            <div class="center-inline-block">
                <h2 class="sub-title" tabindex="0" id="content">Explore Restaurant</h2>
            </div>
            <div id="home_explore" class="grid"></div>
            <a class="cta-link" href="#/all">Explore More Restaurant</a>
        </div>
        <div class="flex content-space-beetwen sponsors">
            <div class="flex content-space-around sponsor-icon">
                <img src="/assets/recc.png" alt="" width="268" height="107" srcset="">
                <img src="/assets/recd.png" alt="" width="268" height="107" srcset="">
                <img src="/assets/recf.png" alt="" width="268" height="107" srcset="">
                <img src="/assets/recg.png" alt="" width="268" height="107" srcset="">
                <img src="/assets/rece.png" alt="" width="268" height="107" srcset="">
    
            </div>
            <div class="flex content-center align-center sponsor-title">
                <h2 class="cus-title">
                    Our Sponsors
                </h2>
            </div>
        </div>
        <div class="flex content-space-beetwen about bg-theme">
            <div class="about-form">
                <div class="flex card">
                    <div class="maps">
                        <iframe tabindex="-1" width="100%" height="100%"
                                src="https://maps.google.com/maps?q=jl%20asem%20jaya&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                    <div class="form">
                        <h3>We Will Contact You Soon !!!</h3>
                        <form action="">
                            <label>
                                <input type="text" placeholder="Email">
                            </label>
                            <label>
                                <textarea name="" id="" rows="10" placeholder="Message"></textarea>
                            </label>
                            <input type="button" class="button-cta" value="Submit">
                        </form>
                        <a class="cta-link" href="https://github.com/masdikaid/">or visit our work</a>
                    </div>
                </div>
            </div>
            <div id="about" class="flex content-center align-center about-title">
                <h2 class="cus-title">
                    About Us
                    
                </h2>
            </div>
        </div>
    `,
  afterRender: async () => {
    const restaurants = await RestaurantApi.list();
    const restaurantContainer = document.querySelector('#home_explore');
    restaurants.forEach((restaurant, index) => {
      if (index <= 5) restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
    });
  }
};

export default Home;
