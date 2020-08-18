<template>
  <article id="project">
    <page-title>Project</page-title>
    <ul class="list">
      <li v-for="item in project" :key="item.id" v-lazyload>
        <div class="logo" v-lazyload="item.logo"></div>
        <p class="year">{{ item.year }}</p>
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data: () => ({
    project: [
      {
        logo: require('~/assets/images/project/insper.png'),
        name: 'Insper',
        year: '2018'
      }, {
        logo: require('~/assets/images/project/brandncompany.png'),
        name: 'Brand & Company',
        year: '2018'
      }, {
        logo: require('~/assets/images/project/momntalk.png'),
        name: 'Mom & talk',
        year: '2018'
      }, {
        logo: require('~/assets/images/project/genedoctor.png'),
        name: 'Genedoctor',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/golping.png'),
        name: 'Golping',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/strikezon.png'),
        name: 'Strikezone',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/greencrossem.png'),
        name: 'GreenCross EM',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/newriver.png'),
        name: 'Newriver',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/gongcha.png'),
        name: 'Gongcha',
        year: '2017'
      }, {
        logo: require('~/assets/images/project/lottefinechem.png'),
        name: 'Lotte Fine Chemical',
        year: '2016'
      }, {
        logo: require('~/assets/images/project/bluebird.png'),
        name: 'Bluebird',
        year: '2016'
      }, {
        logo: require('~/assets/images/project/coffinegurunaru.png'),
        name: 'Coffine Gurunaru',
        year: '2015'
      }, {
        logo: require('~/assets/images/project/imagetoday.png'),
        name: 'Imagetoday',
        year: '2014'
      }, {
        logo: require('~/assets/images/project/clipartkorea.png'),
        name: 'Clipartkorea',
        year: '2014'
      }
    ]
  }),
  methods: {}
}
</script>

<style lang="scss">
#project {padding: 50px;
  .list {width: 200px;
    li {margin: 50px 0 0; text-align: center;
      &:first-child {margin-top: 0;}
      .logo {display: flex; justify-content: center; align-items: center; position: relative; margin: 0 0 12px; width: 200px; height: 100px; padding: 12px; background: #ffffff;
        img {max-width: 100%; max-height: 100%;}
        &:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #eeeeee; transition: all 1000ms;}
      }
      .year {font-style: italic;}
      &.v-done {
        .logo {
          &:after {opacity: 0;}
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
}
</style>