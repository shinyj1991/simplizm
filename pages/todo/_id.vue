<template>
  <section class="todo_detail" v-if="detail">
    <div>
      <p>{{ `${detail.id}. ${detail.title}` }}</p>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  validate({ params, query, store }) {
    return /^\d+$/.test(params.id);
  },
  asyncData({ params, query }) {
    return {
      params: params,
      query: query
    }
  },
  computed: mapState({
    detail: state => state.todo.detail
  }),
  created() {
    // 상세페이지 초기화
    this.resetDetail();
  },
  mounted() {
    // 상세페이지 데이터 가져오기
    this.getDetail(this.params);
  },
  methods: {
    ...mapMutations({
      resetDetail: 'todo/resetDetail'
    }),
    ...mapActions({
      getDetail: 'todo/getDetail'
    })
  }
}
</script>

<style lang="scss">
.todo_detail {position: fixed; top: 0; right: 0; left: 0; height: 100%; background: #ffffff;}
</style>

