import Vue from 'vue';

export default function(context) {
  context.app.router.beforeEach(function(to) {
    context.app.router.push(to.fullPath);
  });
}