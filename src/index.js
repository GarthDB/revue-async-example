import Vue from 'vue';
import App from './containers/App.vue';
import store from './store';
import { fetchPostsIfNeeded } from './actions';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
});
