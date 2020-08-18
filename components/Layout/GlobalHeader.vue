<template>
  <header id="header">
    <div class="inner">
      <h1 class="logo"><nuxt-link to="/">SIMPLIZM</nuxt-link></h1>
      <button type="button" class="btn_menu" :class="{ on: menuFlag }" @click="toggleMenu"><span>Menu</span></button>
    </div>
    <aside id="aside" :class="{ on: menuFlag }" @click="toggleMenu">
      <div class="inner">
        <ul>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/project">Project</nuxt-link></li>
          <li><nuxt-link to="/github">Github</nuxt-link></li>
          <li><nuxt-link to="/story">Story</nuxt-link></li>
        </ul>
      </div>
    </aside>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState({
    menuFlag: state => state.ui.menuFlag
  }),
  methods: {
    /*...mapMutations({
      toggleMenu: 'ui/toggleMenu'
    }),*/
    toggleMenu(event) {
      console.log(event);
      this.$store.commit('ui/toggleMenu');
    }
  }
}
</script>

<style lang="scss" scope>
#header {position: fixed; top: 0; right: 0; left: 0; z-index: 100; background: rgba(0, 0, 0, 0.8);
  > .inner {position: relative; max-width: 1280px; height: 100px; margin: 0 auto; border-bottom: 1px solid #ffffff;
    h1 {position: absolute; top: 20px; left: 20px;
      a {display: block; font-family: 'Roboto'; font-weight: 700; font-size: 36px; line-height: 60px; color: #ffffff;}
    }
    .btn_menu {position: absolute; top: 38px; right: 20px; z-index: 999; width: 36px; height: 24px; font-size: 0;
      &:before {display: block; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: #ffffff; content: ''; transform: rotate(0deg); transition: all 300ms; transform-origin: left center;}
      span     {display: block; position: absolute; top: 11px; left: 0; width: 100%; height: 2px; background: #ffffff; text-indent: -9999em; transition: all 300ms;}
      &:after  {display: block; position: absolute; top: 22px; left: 0; width: 100%; height: 2px; background: #ffffff; content: ''; transform: rotate(0deg); transition: all 300ms; transform-origin: left center;}
      &.on {
        &:before {transform: rotate(37.5deg);}
        span     {opacity: 0;}
        &:after  {transform: rotate(-37.5deg);}
      }
    }
  }
}

#aside {
  display: flex; overflow: hidden; position: fixed; top: 0; right: 0; left: 0; z-index: 998; width: 100%; height: 0px; 
  background: rgba(0, 0, 0, 0.8); opacity: 0; 
  transition: opacity 300ms, height 1ms 300ms;
  &.on {height: 100%; opacity: 1; transition: opacity 300ms;}
  .inner {width: 1280px; margin: 0 auto; padding: 100px 0 0; text-align: right;
    ul {display: inline-block;
      li {display: block;
        &:first-child {margin-top: 0;}
        a {display: inline-block; padding: 12px 32px; font-size: 24px; line-height: 1.5;}
      }
    }
  }
}

@media screen and (max-width: 750px) {

#aside {
  .inner {
    ul {
      li {
        a {font-size: 40px;}
      }
    }
  }
}
}
</style>