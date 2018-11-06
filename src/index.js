import Vue from 'vue';
import App from './app.vue';

import './assets/styles/global.styl';

const root = document.createElement('div');
document.body.appendChild(root);


let a = 0;

new Vue({
    render: (h) => h(App)
}).$mount(root);