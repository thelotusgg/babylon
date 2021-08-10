<template>
  <div class="2xl:max-w-layoutContainer 2xl:mx-auto">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutContainer',
});
</script>
