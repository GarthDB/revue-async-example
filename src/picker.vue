<template>
  <div>
    <h1>{{ selectedList }}</h1>
    <select v-model="selected" v-on:change="listSelectHandler">
      <option value="one">List 1</option>
      <option value="two">List 2</option>
    </select>
  </div>
</template>

<script>
import store from './store';
import { selectList } from './actions';
export default {
  data() {
    return {
      selectedList: this.$select('selectList'),
    }
  },
  methods: {
    listSelectHandler: (event) => {
      store.dispatch(selectList(event.target.value));
    }
  }
}
</script>
