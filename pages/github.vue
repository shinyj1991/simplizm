<template>
  <article id="github">
    <page-title>Github</page-title>
    <ul class="github_list">
      <li>
        <a href="https://shinyj1991.github.io/kronos" target="_blank">
          <div class="visual">
            <img src="~/assets/images/github/kronos.png" alt="">
          </div>
          <p class="name">Kronos</p>
          <p class="desc">JQuery calendar plug-in.</p>
        </a>
      </li>
      <li>
        <a href="https://shinyj1991.github.io/eclipse" target="_blank">
          <div class="visual">
            <img src="~/assets/images/github/eclipse.png" alt="">
          </div>
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
        .visual {display: flex; justify-content: center; align-items: center; height: 200px; background: #ffffff;
          img {max-width: 200px; max-height: 200px;}
        }
        .name {margin: 20px 0 0; font-size: 20px;}
        .desc {margin: 10px 0 0; font-style: italic; font-size: 16px; color: #cccccc;}
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