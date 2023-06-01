const Home = {
    render: async () => {
        return `
        <div tabindex="0" class="full-container">
            <img class="jumbotron" src="/images/heros/hero-image_4.jpg" alt="jumbotron banner"/>
            <h3 class="content-overlay cus-title">Food For Everyone</h3>
        </div>
        <div id="favorite" class="container bg-theme">
            <div tabindex="0" class="center-inline-block">
                <h2 class="sub-title">Explore Restaurant</h2>
            </div>
            <div class="grid">
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/41" alt="Bring Your Phone Cafe">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.6</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="ratting">
                                <h3>Medan</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Bring Your Phone Cafe</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed soluta
                                doloribus
                                a asperiores architecto repudiandae necessitatibus, incidunt cum quos, aperiam recusandae
                                sunt
                                mollitia cupiditate dolores ducimus? Quaerat, quas.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/07" alt="Run The Gun" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.6</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Bali</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Run The Gun</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed soluta
                                doloribus
                                a asperiores architecto repudiandae necessitatibus, incidunt cum quos, aperiam recusandae
                                sunt
                                mollitia cupiditate dolores ducimus? Quaerat, quas.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/29" alt="pangsit-express"
                         srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.8</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Ternate</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Pangsit Express</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed soluta
                                doloribus
                                a asperiores architecto repudiandae necessitatibus, incidunt cum quos, aperiam recusandae
                                sunt
                                mollitia cupiditate dolores ducimus? Quaerat, quas.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/38" alt="ducky-duck" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.7</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Malang</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Ducky Duck</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                was
                                born and I will give you a complete account of the system, and expound the actual teachings
                                of
                                the great explorer of the truth.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/40" alt="kafein" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>3.8</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Bali</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Kafein</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/08" alt="makan-mudah" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.6</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Malang</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Makan Mudah</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/08" alt="makan-mudah" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>3.6</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Surabaya</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Saya Suka</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                was
                                born and I will give you a complete account of the system, and expound the actual teachings
                                of
                                the great explorer of the truth.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/45" alt="gigitan-cepat" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>4.0</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Aceh</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Gigitan Cepat</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus
                                mus. Donec quam felis.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
                <div tabindex="0" class="card">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/45" alt="fairy-cafe" srcset="">
                    <div class="content-overlay flex-column content-space-beetwen">
                        <div class="flex card-badge content-space-beetwen">
                            <div class="flex content-space-around align-center ratting">
                                <img src="/assets/star.png" alt="ratting">
                                <h3>3.9</h3>
                            </div>
                            <div class="flex content-space-around align-center location">
                                <img src="/assets/ellipse.png" alt="location">
                                <h3>Malang</h3>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>Fairy Cafe</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                was
                                born and I will give you a complete account of the system, and expound the actual teachings
                                of
                                the great explorer of the truth.</p>
                            <a class="button-cta" href="http://maps.google.com" target="_blank">Open in Google Maps </a>
                        </div>
                    </div>
                </div>
    
            </div>
            <a class="cta-link" href="#">Explore More Restaurant</a>
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

    }
}

export default Home;