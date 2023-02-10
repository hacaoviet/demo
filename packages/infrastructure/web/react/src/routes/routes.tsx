import config from '~/config';

// components
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import UniqueLayout from '~/layouts/UniqueLayout';

// public routes
const publicRoutes = [
  { path: config.routes.public.home, component: Home },
  { path: config.routes.public.login, component: Login, layout: UniqueLayout },
  { path: config.routes.notFound, component: NotFound, layout: UniqueLayout },
];

export { publicRoutes };
