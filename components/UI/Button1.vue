<template>
  <button type="button" @click="$emit('click')" class="button1">
    <slot>Button</slot>
  </button>
</template>