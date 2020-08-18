import Vue from 'vue'

Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
});

Vue.directive('lazyload', {
  inserted(el, binding) {
    let options = {
      root: binding.value ? document.querySelector(binding.value.rootScrollEl) : null,
      rootMargin: '0px'
    };

    el.className += ' v-lazyload';

    el.observer = new IntersectionObserver(changes => {
      for (const change of changes) {
        if (change.intersectionRatio > 0) {
          el.observer.disconnect();

          if (binding.value) {
            // 속성값이 있을 때 실행
            var imgEl = document.createElement('img');  
            imgEl.setAttribute('src', binding.value);
  
            imgEl.onload = function() {
              el.appendChild(imgEl);
              el.className += ' v-done';
            };
          } else {
            // 속성값이 없을 때 실행
            el.className += ' v-done';
          }
        }
      }
    }, options);

    el.observer.observe(el);
  },
  unbind(el, binding) {
    if (el.observer) {
      el.observer.disconnect();
    }
  }
});