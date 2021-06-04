<template>
  <div
    class="group bg-gray-50 shadow-sm p-4 transition-shadow duration-500 hover:shadow-md">
      <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppCard',
});
</script>
