import Vue from 'vue';

export default function(context) {
  context.app.router.beforeEach(function(to, from, next) {
    next();
  });
}