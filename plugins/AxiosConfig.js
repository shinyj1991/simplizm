import axios from 'axios';

export default function(context) {
  axios.interceptors.request.use(
    function (config) {
      // 요청 인터셉터
      context.store.commit('ui/resetLoaded'); // loading : show
      return config;
    },
    function (error) {
      return Promise.reject(error);
    });

  axios.interceptors.response.use(
    function (response) {
      // 응답 인터셉터
      context.store.commit('ui/completedLoad'); // loading : hide
      return response;
    },
    function (error) {
      return Promise.reject(error);
    });
}