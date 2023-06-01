import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from "./views/app";

const app = new App({
        navToggle: document.querySelector('#burger'),
        nav: document.querySelector('#nav-mobile'),
        main: document.querySelector('main')
    }
);

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
