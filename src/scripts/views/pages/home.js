import Restaurant from "../../data/restaurant";
import RestaurantCard from "../component/restaurant-card";

const Home = {
    render: async () => {
        return `
        <div tabindex="0" class="full-container">
            <img class="jumbotron" src="/images/heros/hero-image_4.jpg" alt="jumbotron banner"/>
            <h3 class="content-overlay cus-title">Food For Everyone</h3>
        </div>
        <div class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">Explore Restaurant</h2>
            </div>
            <div id="home_explore" class="grid"></div>
            <a class="cta-link" href="#/all">Explore More Restaurant</a>
        </div>
        <div class="flex content-space-beetwen sponsors">
            <div class="flex content-space-around sponsor-icon">
                <img src="/assets/recc.png" alt="" srcset="">
                <img src="/assets/recd.png" alt="" srcset="">
                <img src="/assets/recf.png" alt="" srcset="">
                <img src="/assets/recg.png" alt="" srcset="">
                <img src="/assets/rece.png" alt="" srcset="">
    
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
    `
    },
    afterRender: async () => {
        const restaurants = await Restaurant.list();
        const restaurantContainer = document.querySelector('#home_explore');
        restaurants.forEach((restaurant, index) => {
            if (index <= 5) restaurantContainer.innerHTML += RestaurantCard.render(restaurant);
        });
    }
}

export default Home;