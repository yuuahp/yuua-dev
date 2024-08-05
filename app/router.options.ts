import type {RouterConfig} from '@nuxt/schema'

const SCROLL_CONTAINER_ID = 'main';
const scrollPositions = {};

export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        console.log(scrollPositions)
        if (to.fullPath === from.fullPath) {
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