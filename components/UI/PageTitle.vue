<template>
  <h1 class="page-title"><slot></slot></h1>
</template>

<style lang="scss">
.page-title {margin: 0 0 50px; font-weight: 400; font-size: 36px;}

@media screen and (max-width: 750px) {
  .page-title {font-size: 36px;}
}
</style>