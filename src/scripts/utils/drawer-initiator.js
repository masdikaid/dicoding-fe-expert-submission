const DrawerInitiator = {
  init({
    navToggle,
    nav,
    main
  }) {
    navToggle.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },
  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('nav-show');
  },
  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('nav-show');
  }
};

export default DrawerInitiator;
