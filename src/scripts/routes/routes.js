import Home from '../views/pages/home';
import All from '../views/pages/all';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favourites';

const Routes = {
  '/': Home,
  '/all': All,
  '/favorite': Favorite,
  '/detail/:id': Detail
};

export default Routes;
