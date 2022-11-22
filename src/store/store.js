import { defineStore } from 'pinia';
export const useStore = defineStore('store', {
    state: () => ({
        debug: import.meta.env.MODE === 'development',
        isInitialized: false,
        count: 0,
    }),
    actions: {
        initApp() {
            this.isInitialized = true;
            console.log('app initialized!');
        },
        increment(value = 1) {
            this.count += value;
        },
    },
    getters: {
        isReady: (state) => {
            return !state.isInitialized;
        },
    },
});
