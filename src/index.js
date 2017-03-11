import Vue from 'vue';
import Picker from './picker.vue';
import store from './store';
// import { fetchPostsIfNeeded } from './actions';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(Picker),
});
