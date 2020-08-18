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

    el.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.observer.disconnect();

          if (binding.value) {
            var imgEl = document.createElement('img');  
            imgEl.setAttribute('src', binding.value);
  
            imgEl.onload = function() {
              el.appendChild(imgEl);
              if (el.closest('.v-lazyload')) {
                el.closest('.v-lazyload').className += ' v-done';
              } else {
                el.className += ' v-done';
              }
            };
          } else {
            if (el.closest('.v-lazyload')) {
              el.closest('.v-lazyload').className += ' v-done';
            } else {
              el.className += ' v-done';
            }
          }
        }
      });
    }, options);

    el.observer.observe(el);
  },
  unbind(el, binding) {
    if (el.observer) {
      el.observer.disconnect();
    }
  }
});