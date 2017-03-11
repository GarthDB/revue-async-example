<template>
  <div>
    <Picker/>
    <h1>{{selectedList}}</h1>
    <ul>
      <li v-for="(item, index) in list" key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import store from './store';
import {fetchList} from './actions';
import Picker from './picker.vue';
export default {
  name: 'App',
  data() {
    return {
      selectedList: this.$select('selectList'),
      list: [
        'tada',
        'poop',
        'yay!',
      ],
    };
  },
  computed: {

  },
  components: {Picker},
}
</script>
