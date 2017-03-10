<style>
</style>

<template>
  <ul>
    <li v-for="(post, index) in posts" key="index">{{ post.title }}</li>
  </ul>
</template>

<script>
  export default {
    props: ['posts'],
  };
  // onChange={e => onChange(e.target.value)}
</script>
