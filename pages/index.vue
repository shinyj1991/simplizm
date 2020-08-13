<template>
  <section class="home">
    <nuxt-link to="/todo">Todo List</nuxt-link>
    <nuxt-link to="/UIGuide">UI GUIDE</nuxt-link>
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
.home {padding: 50px;
  a {display: inline-block; border: 1px solid #cccccc; padding: 20px; background: #f7f7f7;}
}
</style>

