import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

const app = new App({
  navToggle: document.querySelector('#burger'),
  nav: document.querySelector('#nav-mobile'),
  main: document.querySelector('main'),
  skipContent: document.querySelector('#skip-link')
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
