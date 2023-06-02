import Home from "../views/pages/home";
import All from "../views/pages/all";
import Detail from "../views/pages/detail";

const Routes = {
    '/': Home,
    '/all': All,
    '/detail/:id': Detail,
}

export default Routes;