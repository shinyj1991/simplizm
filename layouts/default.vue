<template>
  <div id="default">
    <nuxt/>
    <loader v-if="!loaded"></loader>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: mapState({
    loaded: state => state.ui.loaded
  })
}
</script>

<style lang="scss">
body {background: #000000;}
#default {width: 750px; min-height: 100vh; margin: 0 auto; background: #ffffff;}
</style>

