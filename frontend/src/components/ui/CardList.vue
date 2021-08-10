<template>
  <div
    class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CardList',
});
</script>
