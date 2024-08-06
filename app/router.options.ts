import type {RouterConfig} from '@nuxt/schema'

const SCROLL_CONTAINER_ID = 'main';
const scrollPositions = {};

export default <RouterConfig>{
    // from https://github.com/vuejs/vue-router/issues/1187#issuecomment-1255985237
    scrollBehavior: (to, from, savedPosition) => {
        if (to.name === from.name) {
            return;
        }

        const isNavigationForward = (savedPosition === null);
        const contentEl = document.getElementById(SCROLL_CONTAINER_ID) as HTMLElement;

        console.assert(contentEl !== null, 'Scroll container not found');

        const nuxt = useNuxtApp();

        if (isNavigationForward) {
            scrollPositions[from.path] = {
                top: contentEl.scrollTop,
                left: contentEl.scrollLeft
            };

            nuxt.hook('page:transition:finish', () => {
                contentEl.scroll({
                    top: 0,
                    left: 0
                });
            })

        } else {
            const savedPosition = scrollPositions[to.path];
            if (savedPosition) {
                nuxt.hook('page:transition:finish', () => {
                    contentEl.scroll(savedPosition);
                });
            }
            delete scrollPositions[to.path];
        }
    },
};