<template>
  <article id="github">
    <page-title>Github</page-title>
    <ul class="github_list">
      <li class="lazyload">
        <a href="https://shinyj1991.github.io/kronos" target="_blank">
          <div class="visual" v-lazyload="require('~/assets/images/github/kronos.png')"></div>
          <p class="name">Kronos</p>
          <p class="desc">JQuery calendar plug-in.</p>
        </a>
      </li>
      <li class="lazyload">
        <a href="https://shinyj1991.github.io/eclipse" target="_blank">
          <div class="visual" v-lazyload="require('~/assets/images/github/eclipse.png')"></div>
          <p class="name">Eclipse</p>
          <p class="desc">JQuery images slider plug-in.</p>
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="scss">
#github {padding: 50px;
  .github_list {margin: 0 -50px -50px 0;
    li {float: left; width: 300px; margin: 0 50px 50px 0;
      a {display: block; text-align: center;
        .visual {display: flex; justify-content: center; align-items: center; position: relative; height: 200px; margin: 0 0 12px; background: #ffffff;
          img {max-width: 200px; max-height: 200px;}
          &:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #eeeeee; transition: all 1000ms;}
        }
        .name {font-size: 20px; opacity: 0; transition: all 1000ms;}
        .desc {margin: 5px 0 0; font-style: italic; font-size: 16px; color: #aaaaaa; opacity: 0; transition: all 1000ms;}
      }
      &.lazyloaded {
        a {
          .visual {
            &:after {opacity: 0;}
          }
          .name {opacity: 1;}
          .desc {opacity: 1;}
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
#github {
  .github_list {margin: 0;
    li {float: none; width: 100%; margin: 50px 0 0;
      &:first-child {margin-top: 0;}
      a {
        .visual {height: 300px;
          img {max-width: 260px; max-height: 260px;}
        }
        .name {font-size: 30px;}
        .desc {font-size: 24px;}
      }
    }
  }
}
}
</style>