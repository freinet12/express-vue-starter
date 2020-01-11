import Vue from 'vue';
import Vuex from 'vuex';
import router from './router.js';
import store from './store/store';

require('./bootstrap');


Vue.use(Vuex);

import App from './components/App';

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store: new Vuex.Store(store),
});