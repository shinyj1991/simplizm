<template>
  <article id="project">
    <page-title>Project</page-title>
    <ol class="year_list">
      <li v-for="year in years" :key="year.id">
        <p class="year">{{ year.year }}</p>
        <ul class="project_list">
          <li class="v-lazyload" v-for="project in year.projects" :key="project.id">
            <div class="logo" v-lazyload="project.logo"></div>
            <p class="name">{{ project.name }}</p>
          </li>
        </ul>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        year: '2018',
        projects: [
          {
            logo: require('~/assets/images/project/insper.png'),
            name: 'Insper'
          },
          {
            logo: require('~/assets/images/project/brandncompany.png'),
            name: 'Brand & Company'
          },
          {
            logo: require('~/assets/images/project/momntalk.png'),
            name: 'Mom & talk'
          }
        ]
      },
      {
        year: '2017',
        projects: [
          {
            logo: require('~/assets/images/project/genedoctor.png'),
            name: 'Genedoctor'
          },
          {
            logo: require('~/assets/images/project/golping.png'),
            name: 'Golping'
          },
          {
            logo: require('~/assets/images/project/strikezon.png'),
            name: 'Strikezone'
          },
          {
            logo: require('~/assets/images/project/greencrossem.png'),
            name: 'GreenCross EM'
          },
          {
            logo: require('~/assets/images/project/newriver.png'),
            name: 'Newriver'
          },
          {
            logo: require('~/assets/images/project/gongcha.png'),
            name: 'Gongcha'
          },
        ]
      },
      {
        year: '2016',
        projects: [
          {
            logo: require('~/assets/images/project/lottefinechem.png'),
            name: 'Lotte Fine Chemical'
          },
          {
            logo: require('~/assets/images/project/bluebird.png'),
            name: 'Bluebird'
          },
        ]
      },
      {
        year: '2015',
        projects: [
          {
            logo: require('~/assets/images/project/coffinegurunaru.png'),
            name: 'Coffine Gurunaru'
          },
        ]
      },
      {
        year: '2014',
        projects: [
          {
            logo: require('~/assets/images/project/imagetoday.png'),
            name: 'Imagetoday'
          },
          {
            logo: require('~/assets/images/project/clipartkorea.png'),
            name: 'Clipartkorea'
          },
        ]
      }
    ]
  }),
  methods: {}
}
</script>

<style lang="scss">
#project {padding: 50px;
  .year_list {
    > li {position: relative; margin: 50px 0 0;
      &:first-child {margin-top: 0;}
      .year {position: sticky; top: 120px; left: 0; font-weight: 300; font-size: 36px; line-height: 50px; font-style: italic;}
      .project_list {width: 300px; margin: -50px 0 0 120px;
        > li {position: relative; margin: 50px 0 0; text-align: center;
          &:first-child {margin-top: 0;}
          .logo {display: flex; justify-content: center; align-items: center; position: relative; margin: 0 0 12px; width: 100%; height: 224px; padding: 12px; background: #ffffff;
            img {max-width: 200px; max-height: 200px;}
            &:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #eeeeee; transition: all 1000ms;}
          }
          .name {font-size: 20px;}
          &.v-done {
            .logo {
              &:after {opacity: 0;}
            }
          }
        }
      }
    }
  }
  .testImage {opacity: 0; transition: all 2000ms;
    &.v-done {opacity: 1;}
  }
}

@media screen and (max-width: 750px) {
}
</style>