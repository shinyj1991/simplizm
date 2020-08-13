<template>
  <section id="main">
    <p class="greet">Name : Shin yongjun, Job : Frontend developer</p>
  </section>
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
  .greet {font-family: 'Roboto'; font-size: 16px;}
}
</style>

