<template>
  <section class="todo-list" v-if="list.length">
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="'/todo/' + item.id" :class="{done: item.done}">{{ `${item.id}. ${item.title}` }}</nuxt-link>
        <button type="button" @click="deleteItem(item)">지우기</button>
      </li>
    </ul>
    <p>
      <input type="text" placeholder="할 일을 적으셈" v-model="todoTitle" @keyup.enter="createItem">
      <button @click="createItem">입력</button>
    </p>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  transition: 'none',
  asyncData({ params, query }) {
    return {
      params: params,
      query: query
    }
  },
  data: () => ({
    todoTitle: ''
  }),
  mounted: function() {
    if (!this.$store.state.todo.list.length) {
      this.getList();
    }
  },
  computed: mapState({
    list: state => state.todo.list
  }),
  methods: {
    createItem() {
      if (!this.todoTitle) {
        return;
      }
      this.$store.commit('todo/createItem', this.todoTitle);
      this.todoTitle = '';
    },
    ...mapMutations({
      toggleItem: 'todo/toggleItem'
    }),
    ...mapActions({
      deleteItem: 'todo/deleteItem',
      getList: 'todo/getList'
    })
  }
}
</script>

<style lang="scss">
.todo-list {padding: 30px;
  ul {
    li {margin: 20px 0 0;
      &:before {margin-top: 0;}
      a {color: #ffffff; text-decoration: underline;}
      button {padding: 3px; background: #f7f7f7; border: 1px solid #cccccc; color: #000000; font-size: 14px;}
    }
  }
}
</style>