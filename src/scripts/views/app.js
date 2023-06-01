import DrawerInitiator from "../utils/drawer-initiator";
import Parser from "../routes/parser";
import Routes from "../routes/routes";

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

    async renderPage() {
        const url = Parser.parseActiveUrlWithCombiner();
        const page = Routes[url];
        this._main.innerHTML = await page.render();
        await page.afterRender();
    }
}