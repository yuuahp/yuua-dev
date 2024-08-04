import type {RouterConfig} from '@nuxt/schema'

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {el: to.hash, top: 40, behavior: 'smooth'}
        }
    },
}