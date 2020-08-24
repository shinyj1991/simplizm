<template>
  <article id="project">
    <page-title>Project</page-title>
    <!-- New Project, Maintenance -->
    <div class="tab">
      <button type="button" :class="{ on: tabIndex === 1 }" @click="tabIndex = 1">New Project</button>
      <button type="button" :class="{ on: tabIndex === 2 }" @click="tabIndex = 2">Maintenance</button>
    </div>
    <ol class="new_projects" :class="{ on: tabIndex === 1 }">
      <li v-for="year in newProjects" :key="year.id">
        <p class="year">{{ year.year }}</p>
        <ul class="projects">
          <li class="lazyload" v-for="project in year.projects" :key="project.id">
            <a :href="project.url" target="_blank">
              <div class="logo" v-lazyload="project.logo"></div>
              <p class="name">{{ project.name }}</p>
            </a>
          </li>
        </ul>
      </li>
    </ol>
    <ul class="maintenances" :class="{ on: tabIndex === 2 }">
      <li v-for="company in maintenances" :key="company.id">
        <p class="company">{{ company.company }}</p>
        <ul class="projects">
          <li class="lazyload" v-for="project in company.projects" :key="project.id">
            <div class="logo" v-lazyload="project.logo"></div>
            <p class="name">{{ project.name }}</p>
            <p class="period">{{ project.period }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data: () => ({
    newProjects: [
      // {
      //   year: '2019',
      //   projects: [
      //     {
      //       logo: require('~/assets/images/project/myearn.png'),
      //       name: 'Myearn'
      //     }
      //   ]
      // },
      {
        year: '2018',
        projects: [
          {
            logo: require('~/assets/images/project/insper.png'),
            name: 'Insper',
            url: 'https://www.insper.co.kr/'
          },
          {
            logo: require('~/assets/images/project/brandncompany.png'),
            name: 'Brand & Company',
            url: 'http://www.brandncompany.com/'
          },
          {
            logo: require('~/assets/images/project/momntalk.png'),
            name: 'Mom & talk',
            url: 'https://www.momntalk.com/'
          }
        ]
      },
      {
        year: '2017',
        projects: [
          {
            logo: require('~/assets/images/project/genedoctor.png'),
            name: 'Genedoctor',
            url: 'https://m.genedoctor.co.kr/'
          },
          {
            logo: require('~/assets/images/project/golping.png'),
            name: 'Golping',
            url: 'http://golping.golfzon.com/'
          },
          {
            logo: require('~/assets/images/project/strikezon.png'),
            name: 'Newdinmall',
            url: 'http://www.newdinmall.com/'
          },
          {
            logo: require('~/assets/images/project/greencrossem.png'),
            name: 'GreenCross EM',
            url: 'http://www.gcem.co.kr/'
          },
          {
            logo: require('~/assets/images/project/newriver.png'),
            name: 'Newriver',
            url: 'http://www.newriver.co.kr/'
          },
          {
            logo: require('~/assets/images/project/gongcha.png'),
            name: 'Gongcha',
            url: 'http://www.gong-cha.co.kr/'
          },
        ]
      },
      {
        year: '2016',
        projects: [
          {
            logo: require('~/assets/images/project/lottefinechem.png'),
            name: 'Lotte Fine Chemical',
            url: 'https://www.lottefinechem.com/'
          },
          {
            logo: require('~/assets/images/project/bluebird.png'),
            name: 'Bluebird',
            url: 'http://www.bluebirdcorp.com/'
          },
        ]
      },
      {
        year: '2015',
        projects: [
          {
            logo: require('~/assets/images/project/coffinegurunaru.png'),
            name: 'Coffine Gurunaru',
            url: 'http://www.coffine.co.kr/'
          },
        ]
      },
      {
        year: '2014',
        projects: [
          {
            logo: require('~/assets/images/project/imagetoday.png'),
            name: 'Imagetoday',
            url: 'https://www.imagetoday.co.kr/'
          },
          {
            logo: require('~/assets/images/project/clipartkorea.png'),
            name: 'Clipartkorea',
            url: 'https://www.clipartkorea.co.kr/'
          },
        ]
      }
    ],
    maintenances: [
      {
        company: 'Newriver',
        projects: [
          {
            logo: require('~/assets/images/project/starkey.png'),
            name: 'Starkey',
            period: '2017 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/megabox.png'),
            name: 'Megabox',
            period: '2016'
          },
          {
            logo: require('~/assets/images/project/momstouch.png'),
            name: `Mom's Touch`,
            period: '2015 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/cnt.png'),
            name: 'CNTmart',
            period: '2015 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/coffeenie.png'),
            name: 'Coffeenie',
            period: '2015 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/lsnetworks.png'),
            name: 'LS Networks',
            period: '2015 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/samsung_heavy_industries.png'),
            name: 'Samsung Heavy Industries',
            period: '2015 ~ 2018'
          },
          {
            logo: require('~/assets/images/project/binggrae.png'),
            name: 'Binggrae',
            period: '2015 ~ 2016'
          }
        ]
      }
    ],
    tabIndex: 1
  }),
  methods: {}
}
</script>

<style lang="scss">
#project {padding: 50px;
  .tab {overflow: hidden; margin: 0 0 80px;
    button {float: left; height: 40px; margin: 0 0 0 30px; font-size: 24px; color: #999999; text-decoration: underline;
      &:first-child {margin-left: 0;}
      &.on {color: #ffffff;}
    }
  }
  .new_projects {display: none;
    &.on {display: block;}
    > li {position: relative; margin: 50px 0 0;
      &:first-child {margin-top: 0;}
      .year {position: sticky; top: 120px; left: 0; font-weight: 300; font-size: 36px; line-height: 50px; font-style: italic; color: #cccccc;}
      .projects {width: 300px; margin: -50px 0 0 120px;
        > li {position: relative; margin: 50px 0 0; text-align: center;
          &:first-child {margin-top: 0;}
          .logo {display: flex; justify-content: center; align-items: center; position: relative; margin: 0 0 12px; width: 100%; height: 224px; padding: 12px; background: #ffffff;
            img {max-width: 200px; max-height: 200px;}
            &:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #eeeeee; transition: all 1000ms;}
          }
          .name {font-size: 20px; opacity: 0; transition: all 1000ms;}
          &.lazyloaded {
            .logo {
              &:after {opacity: 0;}
            }
            .name {opacity: 1;}
          }
        }
      }
    }
  }
  .maintenances {display: none; width: 300px;
    &.on {display: block;}
    > li {position: relative; margin: 50px 0 0;
      &:first-child {margin-top: 0;}
      .company {position: sticky; top: 120px; left: 0; font-weight: 300; font-size: 36px; line-height: 50px; font-style: italic; color: #cccccc;}
      .projects {width: 300px; margin: -50px 0 0 180px;
        > li {position: relative; margin: 50px 0 0; text-align: center;
          &:first-child {margin-top: 0;}
          .logo {display: flex; justify-content: center; align-items: center; position: relative; margin: 0 0 12px; width: 100%; height: 224px; padding: 12px; background: #ffffff;
            img {max-width: 200px; max-height: 200px;}
            &:after {display: block; content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: #eeeeee; transition: all 1000ms;}
          }
          .name {font-size: 20px; opacity: 0; transition: all 1000ms;}
          .period {margin: 5px 0 0; font-style: italic; font-size: 16px; color: #aaaaaa; opacity: 0; transition: all 1000ms;}
          &.lazyloaded {
            .logo {
              &:after {opacity: 0;}
            }
            .name {opacity: 1;}
            .period {opacity: 1;}
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
#project {
  .tab {
    button {height: 50px; font-size: 32px;}
  }
  .year_list {
    > li {
      .project_list {
        > li {
          .name {font-size: 26px;}
        }
      }
    }
  }
}
}
</style>