import Vue from 'vue';

export default function(context) {
  context.app.router.afterEach(function(to) {
    context.app.router.push(to.fullPath);
  });
}