import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from './components/Welcome';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },

       
    ],
    mode: 'history'
});