<template>
  <article id="main">
    <p class="greet">"Simple is always the best."<br><br>
    Hi. My name is Shin Yongjun.<br>
    I work as a front-end developer and work on creating websites and applications.</p>
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
  .greet {font-family: 'Roboto'; font-size: 16px; line-height: 1.5; letter-spacing: 0.05em;}
}

@media screen and (max-width: 750px) {
  #main {
    .greet {font-size: 24px;}
  }
}
</style>