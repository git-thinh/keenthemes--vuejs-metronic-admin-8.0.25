console.log(`[ main ][ ${__mode__} ]`);

window.__app = null;
window.__allComponents = {};
window.__page = null;

window._userInit = (user) => {
	const u = user || {};
	const id = u.id || '';
	localStorage.setItem('user_logined', id);
	localStorage.setItem('user.' + id, JSON.stringify(u));
};

window._userGetID = () => {
	let id = localStorage.getItem('user_logined') || '';
	return id;
};

window._userGet = () => {
	const id = window._userGetID();
	const su = localStorage.getItem('user.' + id);
	const user = JSON.parse(su || '{}');
	if (Object.keys(user).length === 0) return null;
	return user;
};

//import * as bootstrap from 'bootstrap'
//import './sass/style.scss';

// Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new Popover(popover)
//   })

window.__allComponents = import.meta.glob('./**/*.vue');
console.log('[ main ] allComponents =', Object.keys(window.__allComponents));

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

app.use(createPinia());

app.mount(document.body);

window.__app = app;
//console.log(app._instance.appContext.components)