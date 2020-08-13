<template>
  <div class="modal_wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.modal_wrap {position: fixed; top: 0; right: 0; left: 0; z-index: 10000; width: 100%; height: 100%; background: #ffffff;}
</style>