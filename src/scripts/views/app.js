import DrawerInitiator from '../utils/drawer-initiator';
import Parser from '../routes/parser';
import Routes from '../routes/routes';

export default class App {
  constructor({
    navToggle,
    nav,
    main,
    skipContent
  }) {
    this._navToggle = navToggle;
    this._nav = nav;
    this._main = main;
    this._skipContent = skipContent;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      navToggle: this._navToggle,
      nav: this._nav,
      main: this._main
    });
  }

  async renderPage() {
    const url = Parser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._main.innerHTML = await page.render();

    this._skipContent.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#content')
        .focus();
    });

    this._skipContent.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        document.querySelector('#content')
          .focus();
      }
    });

    await page.afterRender();
  }
}
