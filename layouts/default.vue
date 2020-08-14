<template>
  <div id="default">
    <global-header></global-header>
    <nuxt/>
    <loader v-if="!loaded"></loader>
  </div>
</template>

<script>
import GlobalHeader from '~/components/Layout/GlobalHeader.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded
  }),
  components: {
    GlobalHeader
  }
}
</script>

<style lang="scss">
body {background: #000000;}
#default {max-width: 1280px; margin: 0 auto; padding: 100px 0;}
</style>

