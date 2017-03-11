<template>
  <select v-model="selected" v-on:change="listSelectHandler">
    <option value="one">List 1</option>
    <option value="two">List 2</option>
  </select>
</template>

<script>
import store from './store';
import { selectList } from './actions';
export default {
  methods: {
    listSelectHandler: (event) => {
      store.dispatch(selectList(event.target.value));
    }
  }
}
</script>
