//import routes from './routes';

import pageLayout from '@/pages/_layout';
import { createRouter, createWebHashHistory } from 'vue-router';

const modules = import.meta.glob("@/pages/*.vue", { eager: true });
function getRoutes() {
    const a = [];
    for (const key in modules) {
        const name = key.split("/").at(-1).split(".")[0];
        const fn = modules[key].default;

        let path = name.toLowerCase();
        if (path == 'home' || path == 'index') path = '';
        const layoutName = pageLayout[path] || pageLayout[name.toLowerCase()] || 'None';
        //console.log(name, layoutName);
        a.push({
            path: '/' + path,
            name: name,
            //component: () => import('../pages/Home.vue'),
            component: fn,
            meta: {
                layoutName: layoutName,
                layoutComponent: null,
            },
        })
    }
    return a;
}

const routes = getRoutes();
console.log('[ routes ] =', routes);

async function loadLayoutMiddleware(route) {
    try {
        if (!route.meta.layoutComponent) {
            const layoutName = route.meta.layoutName || 'None';
            const layoutComponent = await import(`@/layouts/Lay${layoutName}.vue`)
            route.meta.layoutComponent = layoutComponent.default;
            console.log('[ routes ].before: layout =', layoutName);
        }
    } catch (e) {
        console.error('[ routes ].before: Error occurred in processing of layouts: ', e);
    }
}

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach(loadLayoutMiddleware)

export default router;
