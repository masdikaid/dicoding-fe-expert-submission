import DrawerInitiator from "../utils/drawer-initiator";

export default class App {
    constructor({navToggle, nav, main}) {
        this._navToggle = navToggle;
        this._nav = nav;
        this._main = main;

        this._initAppShell();
    }

    _initAppShell() {
        DrawerInitiator.init({
                navToggle: this._navToggle,
                nav: this._nav,
                main: this._main
            }
        );
    }
}