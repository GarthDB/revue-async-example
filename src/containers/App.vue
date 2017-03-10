<template>
  <div>
    <Picker :value="selectedReddit" :options="[ 'reactjs', 'frontend' ]">
    </Picker>
    <p>
        <span v-if="redditResults && redditResults.lastUpdated">Last updated at {{ new Date(redditResults.lastUpdated).toLocaleTimeString() }}</span>
        <span v-if="redditResults && !redditResults.isFetching">
          <a href="#"
             onClick={this.handleRefreshClick}>
            Refresh
          </a>
        </span>
    </p>
  </div>
</template>

<script>
import Vue from 'vue';
import Picker from '../components/Picker.vue';
import store from '../store';
import { fetchPostsIfNeeded } from '../actions';

export default {
  name: 'App',
  props: ['posts', 'isFetching', 'dispatch'],
  data() {
    const selectedReddit = this.$select('selectedReddit');
    return {
      selectedReddit,
      redditResults: this.$select(`postsByReddit.${selectedReddit}`),
    }
  },
  mounted: () => {
    store.dispatch(fetchPostsIfNeeded('reactjs'));
    // TODO
    // const { dispatch, selectedReddit } = this.props
    // dispatch(fetchPostsIfNeeded(selectedReddit))
  },
  components: {
    Picker
  },
};
</script>
