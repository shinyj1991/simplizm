<template>
  <article id="main">
    <p class="greet">Simple is always the best.</p>
  </article>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    data: () => ({
      title: ''
    }),
    methods: {}
  }
</script>

<style lang="scss">
#main {padding: 50px;
  .greet {font-family: 'Roboto'; font-size: 16px; letter-spacing: 0.05em;}
}
</style>