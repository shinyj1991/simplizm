<template>
  <div class="loader">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@keyframes loading_spinner {
	0% {opacity: 1; transform: scale(1, 1);}
	100% {opacity: 0; transform: scale(1, 1);}
}

.loader {position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9999; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;
  .spinner {position: relative; width: 70px; height: 65px;
    div {position: absolute; width: 20px; height: 20px; border-radius: 50%; background: rgb(255, 255, 255); animation: loading_spinner 1s linear infinite;
      &:nth-child(1) {top: 0px; left: 13px; animation-delay: -0.833333333333333s;}
      &:nth-child(2) {top: 0px; left: 39px; animation-delay: -0.666666666666667s;}
      &:nth-child(3) {top: 23px; left: 52px; animation-delay: -0.5s;}
      &:nth-child(4) {top: 46px; left: 39px; animation-delay: -0.333333333333333s;}
      &:nth-child(5) {top: 46px; left: 13px; animation-delay: -0.166666666666667s;}
      &:nth-child(6) {top: 23px; left: 0px; animation-delay: -0s;}
    }
  }
}
</style>