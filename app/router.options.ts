import type {RouterConfig} from '@nuxt/schema'

const scrollPositions = {};

export default <RouterConfig>{
    // from https://github.com/vuejs/vue-router/issues/1187#issuecomment-1255985237
    scrollBehavior: (to, from, savedPosition) => {
        if (to.name === from.name) {
            return;
        }

        const isNavigationForward = (savedPosition === null);
        const contentEl = document.querySelector("#main") as HTMLElement;

        console.assert(contentEl !== null, 'Scroll container not found');

        const nuxt = useNuxtApp();

        console.log(scrollPositions);

        if (isNavigationForward) {
            console.log('save scroll position', from.path);
            scrollPositions[from.path] = {
                top: contentEl.scrollTop,
                left: contentEl.scrollLeft
            };

            nuxt.hook('page:finish', () => {
                contentEl.scroll({
                    top: 0,
                    left: 0
                });
            })

        } else {
            console.log('restore scroll position', to.path);
            const savedPosition = scrollPositions[to.path];
            if (savedPosition) {
                nuxt.hook('page:finish', () => {
                    contentEl.scroll(savedPosition);
                });
            }
            delete scrollPositions[to.path];
        }
    },
};