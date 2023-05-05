// importar
import home from './components/home.js';
import error from './components/error404.js';
import login from './components/login.js';
import register from './components/register.js';
import muro from './components/muro.js';

import './lib/loginConfig.js';
import './lib/registerConfig.js';
// Nombre: foodMatch

const routes = [
  { path: '/', component: home },
  { path: '/error', component: error },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/muro', component: muro },
];

const defaultRoute = '/';
const root = document.getElementById('root');

const navigateTo = (hash) => {
  const route = routes.find((routeFound) => routeFound.path === hash);
  // console.log(route.component());
  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
};

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
