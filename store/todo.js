import axios from 'axios';

export const state = () => ({
  counter: 0,
  list: [],
  detail: null
})

export const mutations = {
  createItem: (state, text) => {
    state.counter++;

    state.list.push({
      id: state.counter,
      title: text,
      done: false
    });
  },
  deleteItem: (state, item) => {
    state.list.splice(state.list.indexOf(item), 1);
  },
  getList: (state, res) => {
    state.list = res.data;
  },
  getDetail: (state, res) => {
    // 받아온 view데이터를 state.view에 저장, todo/_id.vue 파일에서 computed로 가져옴
    state.detail = res.data[0];
  },
  toggleItem: (state, item) => {
    item.completed = !item.completed;
  },
  resetDetail: (state) => {
    state.detail = null;
  }
}

export const actions = {
  getList({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(res => {
        commit('getList', res);
      })
      .catch(err => {
        console.log(err);
      })
  },
  getDetail({ commit }, params) {
    // rest api로 view 데이터 가져오기
    axios.get('https://jsonplaceholder.typicode.com/todos/', {
      params: {
        id: params.id
      }
    }).then(res => {
      // mutations.getTodoView 함수 호출
      commit('getDetail', res);
    }).catch(err => {
      console.log(err);
    })
  },
  deleteItem({ commit }, params) {
    axios.delete('https://jsonplaceholder.typicode.com/todos/' + params.id)
    .then(res => {
      commit('deleteItem', params);
    }).catch(err => {
      console.log(err);
    })
  }
}