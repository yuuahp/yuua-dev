import type {RouterConfig} from '@nuxt/schema'

const scrollPositions: { [key: string]: { top: number; left: number } } = {};

export default <RouterConfig>{
    // from https://github.com/vuejs/vue-router/issues/1187#issuecomment-1255985237
    scrollBehavior: (to, from, savedPosition) => {
        const main = document.querySelector("#main") as HTMLElement;

        if (to.fullPath === from.fullPath) {
            main.scrollTo({top: 0, behavior: 'smooth'});
            return;
        }

        if (to.name === from.name) return;

        const isNavigationForward = (savedPosition === null);

        const nuxt = useNuxtApp();

        if (isNavigationForward) {
            scrollPositions[from.path] = {
                top: main.scrollTop,
                left: main.scrollLeft
            };
        } else {
            const savedPosition = scrollPositions[to.path];

            if (savedPosition) {
                nuxt.hook('page:finish', () => {
                    main.scroll(savedPosition);
                });
            }

            delete scrollPositions[to.path];
        }
    },
};