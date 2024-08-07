import type {RouterConfig} from '@nuxt/schema'

const scrollPositions: any = {};

export default <RouterConfig>{
    // from https://github.com/vuejs/vue-router/issues/1187#issuecomment-1255985237
    scrollBehavior: (to, from, savedPosition) => {

        const main = document.querySelector("#main") as HTMLElement;

        if (to.fullPath === from.fullPath) {
            main.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (to.name === from.name) {
            return;
        }

        const isNavigationForward = (savedPosition === null);

        const nuxt = useNuxtApp();

        console.log(scrollPositions);

        if (isNavigationForward) {
            console.log('save scroll position', from.path);
            scrollPositions[from.path] = {
                top: main.scrollTop,
                left: main.scrollLeft
            };

            // nuxt.hook('page:finish', () => {
            //     contentEl.scroll({
            //         top: 0,
            //         left: 0
            //     });
            // })

        } else {
            console.log('restore scroll position', to.path);
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