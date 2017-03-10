<style>
</style>

<template>
  <span>
    <h1>{{ value }}</h1>
    <select v-on:change="selectChange" :value="value">
      <option v-for="(option, index) in options" key="index">{{ option }}</option>
    </select>
  </span>
</template>

<script>
  export default {
    props: ['value', 'options', 'onChange'],
    methods: {
      selectChange: (event) => {
        console.log(event);
      }
    }
  };
  // onChange={e => onChange(e.target.value)}
</script>
